'use client'

import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

// Lazy load de componentes pesados que não são críticos para o LCP
export const AccordionOptimized = dynamic(
  () => import('@/components/ui/accordion').then(mod => ({ 
    default: mod.Accordion as ComponentType<any> 
  })),
  { ssr: true }
)

export const AccordionItemOptimized = dynamic(
  () => import('@/components/ui/accordion').then(mod => ({ 
    default: mod.AccordionItem as ComponentType<any> 
  })),
  { ssr: true }
)

export const AccordionTriggerOptimized = dynamic(
  () => import('@/components/ui/accordion').then(mod => ({ 
    default: mod.AccordionTrigger as ComponentType<any> 
  })),
  { ssr: true }
)

export const AccordionContentOptimized = dynamic(
  () => import('@/components/ui/accordion').then(mod => ({ 
    default: mod.AccordionContent as ComponentType<any> 
  })),
  { ssr: true }
)
