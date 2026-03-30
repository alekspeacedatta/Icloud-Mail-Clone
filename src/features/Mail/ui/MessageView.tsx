import { useMailStore } from '../store/useMailStore'
import MessageItem from './MessageItem'
import EmailToolBar from './EmailToolBar'

const MessageView = () => {
  const email = useMailStore((state) => state.email)

  return (
    <div className="flex w-full flex-col bg-[#1c1c1e]  ">
      <EmailToolBar />
      <div
        className={`overflow-y-auto min-h-0 flex-1 scrollbar scrollbar-thumb-[#9f9f9f] scrollbar-thumb-rounded-full scrollbar-track-[#2c2c2c] ${!email && `flex items-center justify-center`} py-4 px-5 `}
      >
        {email ? (
          <MessageItem />
        ) : (
          <h2 className="text-[28px] text-[#3d3d41]">No Selected Message</h2>
        )}
      </div>
    </div>
  )
}

export default MessageView
