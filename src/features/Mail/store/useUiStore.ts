import { create } from 'zustand'
type UiStoreType = {
  isVisiable: boolean
  setVisibility: (visibility: boolean) => void
}
export const useUiStore = create<UiStoreType>((set) => ({
  isVisiable: true,
  setVisibility: (visibility) => {
    set({ isVisiable: visibility })
  },
}))
