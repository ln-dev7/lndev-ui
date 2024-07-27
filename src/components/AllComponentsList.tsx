'use client'
import { Text } from '@/catalyst/text'
import { Select } from '@/catalyst/select'
import {
  componentsList,
  ComponentListInterface,
} from '@/constants/components-list'
import { useState, useEffect } from 'react'
import Component from './Component'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function AllComponentsList() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const getFilteredComponents = (
    type: string | null,
  ): ComponentListInterface[] => {
    if (type === 'free') {
      return componentsList.filter((component) => component.price === 0)
    } else if (type === 'premium') {
      return componentsList.filter((component) => component.price > 0)
    }
    return componentsList
  }

  const initialFilterType = searchParams.get('type') || 'all'
  const [filteredComponents, setFilteredComponents] = useState<
    ComponentListInterface[]
  >(getFilteredComponents(initialFilterType))

  const filterComponents = (type: string) => {
    const params = new URLSearchParams(searchParams)
    if (type === 'all') {
      params.delete('type')
    } else {
      params.set('type', type)
    }
    setFilteredComponents(getFilteredComponents(type))
    replace(`${pathname}?${params.toString()}`)
  }

  useEffect(() => {
    setFilteredComponents(getFilteredComponents(searchParams.get('type')))
  }, [searchParams])

  return (
    <div className="space-y-4">
      <div className="flex w-full items-center justify-between gap-2">
        <Select
          name="type"
          className="!w-40"
          defaultValue={initialFilterType}
          onChange={(e) => filterComponents(e.target.value)}
        >
          <option value="all">All</option>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </Select>
        <Text className="">{filteredComponents.length} components found</Text>
      </div>
      {filteredComponents.map((component: ComponentListInterface) => (
        <Component component={component} key={component.name} />
      ))}
    </div>
  )
}
