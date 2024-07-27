'use client'
import { Text } from '@/catalyst/text'
import { Select } from '@/catalyst/select'
import {
  templatesList,
  TemplatesListInterface,
} from '@/constants/templates-list'
import { useState, useEffect } from 'react'
import Template from './Template'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function AllTemplatesList() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const getFilteredTemplates = (
    type: string | null,
  ): TemplatesListInterface[] => {
    if (type === 'free') {
      return templatesList.filter((template) => template.price === 0)
    } else if (type === 'premium') {
      return templatesList.filter((template) => template.price > 0)
    }
    return templatesList
  }

  const initialFilterType = searchParams.get('type') || 'all'
  const [filteredTemplates, setFilteredTemplates] = useState<
    TemplatesListInterface[]
  >(getFilteredTemplates(initialFilterType))

  const filterTemplates = (type: string) => {
    const params = new URLSearchParams(searchParams)
    if (type === 'all') {
      params.delete('type')
    } else {
      params.set('type', type)
    }
    setFilteredTemplates(getFilteredTemplates(type))
    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    setFilteredTemplates(getFilteredTemplates(searchParams.get('type')))
  }, [searchParams])

  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between gap-2">
        <Select
          name="type"
          className="!w-40"
          defaultValue={initialFilterType}
          onChange={(e) => filterTemplates(e.target.value)}
        >
          <option value="all">All</option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Select>
        <Text className="">{filteredTemplates.length} templates found</Text>
      </div>
      {filteredTemplates.map((template: TemplatesListInterface) => (
        <Template template={template} key={template.name} />
      ))}
    </div>
  )
}
