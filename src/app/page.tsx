import { Layout } from '@/components/Layout'
import { Container } from '@/components/Container'
import { AllComponentsList } from '@/components/AllComponentsList'
import { Suspense } from 'react'

export default function Page() {
  return (
    <Layout page="home">
      <Container className="mt-0">
        <div className="space-y-10 sm:space-y-12 lg:space-y-16">
          <Suspense fallback={<div>Loading...</div>}>
            <AllComponentsList />
          </Suspense>
        </div>
      </Container>
    </Layout>
  )
}
