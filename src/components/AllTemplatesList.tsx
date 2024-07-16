'use client'
import { Text } from '@/catalyst/text'
import { Select } from '@/catalyst/select'
import {
  templatesList,
  TemplatesListInterface,
} from '@/constants/templates-list'
import { useState } from 'react'
import Template from './Template'

export function AllTemplatesList() {
  const [filteredTemplates, setFilteredTemplates] =
    useState<TemplatesListInterface[]>(templatesList)
  const filterTemplates = (status: string) => {
    if (status === 'all') {
      setFilteredTemplates(templatesList)
    } else {
      if (status === 'free') {
        setFilteredTemplates(
          templatesList.filter((component) => component.price === 0),
        )
      } else {
        setFilteredTemplates(
          templatesList.filter((component) => component.price > 0),
        )
      }
    }
  }
  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between gap-2">
        <Select
          name="status"
          className="!w-40"
          onChange={(e) => filterTemplates(e.target.value)}
        >
          <option value="all">All</option>
          <option value="free">Free</option>
          <option value="Premium">Premium</option>
        </Select>
        <Text className="">{filteredTemplates.length} templates found</Text>
      </div>
      {filteredTemplates.map((template: TemplatesListInterface) => (
        <Template template={template} key={template.name} />
      ))}
    </div>
  )
}
