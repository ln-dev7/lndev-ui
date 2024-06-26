'use client'
import { Text } from '@/catalyst/text'
import { Select } from '@/catalyst/select'
import {
  componentsList,
  ComponentListInterface,
} from '@/constants/components-list'
import { useState } from 'react'
import Component from './Component'

export function AllComponentsList() {
  const [filteredComponents, setFilteredComponents] =
    useState<ComponentListInterface[]>(componentsList)
  const filterComponents = (status: string) => {
    if (status === 'all') {
      setFilteredComponents(componentsList)
    } else {
      if (status === 'free') {
        setFilteredComponents(
          componentsList.filter((component) => component.price === 0),
        )
      } else {
        setFilteredComponents(
          componentsList.filter((component) => component.price > 0),
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
          onChange={(e) => filterComponents(e.target.value)}
        >
          <option value="all">All</option>
          <option value="free">Free</option>
          <option value="Premium">Premium</option>
        </Select>
        <Text className="">{filteredComponents.length} components found</Text>
      </div>
      {filteredComponents.map((component: ComponentListInterface) => (
        <Component component={component} key={component.name} />
      ))}
    </div>
  )
}
