import { useMailStore } from '../store/useMailStore'

const InboxView = () => {
  const selectedTabName = useMailStore((state) => state.selectedTab)
  const emailsQuantity = useMailStore((state) => state.emailsQuantity)
  return (
    <div className="bg-zinc-900 w-3/7 flex flex-col gap-4 pt-4 overflow-hidden border-r border-r-[#3c3c3e]">
      <div className="flex flex-col px-4 gap-1">
        <h2 className="text-zinc-100 text-2xl font-semibold">
          {selectedTabName}
        </h2>
        <p className="text-[#ffffff80] ">messages: {emailsQuantity}</p>
      </div>
      <div className="overflow-y-scroll max-h-[calc(100dvh-84px)]  px-4 scrollbar scrollbar-thumb-[#9f9f9f] scrollbar-thumb-rounded-full scrollbar-track-[#2c2c2c]  ">
        {/* <InboxList/> */}
      </div>
    </div>
  )
}

export default InboxView
