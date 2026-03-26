import { create } from 'zustand'

type MailStoreStates = {
    selectedTab: string,
    emailsQuantity: number,
    setEmailsQuantity: ( emailsQuantity : number ) => void,
    setTabName: ( tabName : string ) => void
}

export const useMailStore = create<MailStoreStates>((set) => ({
    selectedTab: 'Incomes',
    emailsQuantity: 0,
    setEmailsQuantity: (emailsQuantity) => {
        set({ emailsQuantity: emailsQuantity })
    },
    setTabName: ( tabName : string ) => {
        set({ selectedTab: tabName })
    }
}))