import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ui.lndev.me"

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Leonel Ngoya',
    email: 'leonelngoya@gmail.com',
  }

  let feed = new Feed({
    title: 'ui.lndev.me',
    description: 'A fun collection of small, well-coded components to streamline your development process.',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let html = await (await fetch(new URL('/', req.url))).text()
  let $ = cheerio.load(html)

  $('article').each(function () {
    let id = $(this).attr('id')
    assert(typeof id === 'string')

    let url = `${siteUrl}/#${id}`
    let title = $(this).find('h2').first().text()
    let date = $(this).find('time').first().attr('datetime')

    // Extract content
    let componentName = $(this).find('.component-name').text()
    let componentStack = $(this).find('.component-stack').map((_, el) => $(el).text()).get().join(', ')
    let componentSummary = $(this).find('.component-summary').html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof componentSummary === 'string')

    // Construct content for RSS feed
    let content = `
      <h2>${componentName}</h2>
      <p>Stack: ${componentStack}</p>
      <div>${componentSummary}</div>
    `

    feed.addItem({
      title,
      id: url,
      link: url,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  })

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
