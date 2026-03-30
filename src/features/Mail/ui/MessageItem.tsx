import { useMailStore } from '../store/useMailStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const MessageItem = () => {
  const email = useMailStore((state) => state.email)
  return (
    <div className="bg-[#1c1c1e] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.8)] w-full rounded-md ">
      <div className="flex px-5 pt-3 pb-2 gap-2  items-start">
        <div className=" bg-white border border-gray-950 rounded-full h-11 w-12.5 flex justify-center items-center">
          <FontAwesomeIcon icon={faUser} className="" />
        </div>
        <div className="flex flex-col leading-0 mt-0.75 w-full">
          <div className="flex justify-between items-center">
            <h4 className="text-zinc-100 text-[17px] font-medium">
              {email?.Author}
            </h4>
            <p className="font-medium text-sm text-[#ffffff80] line-clamp-1">
              16:57
            </p>
          </div>
          <div className="flex  items-start justify-between">
            <h4 className="text-zinc-100 text-sm">
              {' '}
              To:{' '}
              <span className="ml-2 text-[#ffffff80]">
                qobulashvili@icloud.com
              </span>{' '}
            </h4>
            <button className="text-[#0099ff] text-sm hover:bg-[#35353a] cursor-pointer py-1 px-2 rounded-lg">
              Details
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-b-[#3c3c3e] h-1 w-[96%] mx-auto"></div>
      <div className="flex flex-col px-4 py-2 bg-white rounded-b-md">
        <h3 className="text-[24px] font-medium mb-2">{email?.subject}</h3>
        <p className="text-sm">{email?.description}!</p>
      </div>
    </div>
  )
}

export default MessageItem
