import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type Email = {
  id: number
  type: 'Sent' | 'Income' | 'Draft' | 'Bin' | 'Archived' | 'VIP'
  Author: string
  subject: string
  description: string
}
export type Folder = {
  icon: IconDefinition
  text: string
}
