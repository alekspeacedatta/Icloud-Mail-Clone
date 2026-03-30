import { create } from 'zustand'
import type { Email } from '../types/email.types'

type MailStoreStates = {
  email: Email | null
  selectedTab: string
  emailsQuantity: number
  clearEmail: () => void
  setEmail: (email: Email) => void
  setEmailsQuantity: (emailsQuantity: number) => void
  setTabName: (tabName: string) => void
}

export const useMailStore = create<MailStoreStates>((set) => ({
  email: null,
  selectedTab: 'Inbox',
  emailsQuantity: 0,
  clearEmail: () => {
    set({ email: null })
  },
  setEmail: (email) => {
    set({ email: email })
  },
  setEmailsQuantity: (emailsQuantity) => {
    set({ emailsQuantity: emailsQuantity })
  },
  setTabName: (tabName: string) => {
    set({ selectedTab: tabName })
  },
}))
