import { create } from "zustand"

type InboxListStoreType = {
    isFiltered: boolean
    toggleFiltered: () => void
}
export const useInboxStore = create<InboxListStoreType>((set) => ({
    isFiltered: false,
    toggleFiltered: () => {
        set((state) => ({ isFiltered: !state.isFiltered }))
    }
}))