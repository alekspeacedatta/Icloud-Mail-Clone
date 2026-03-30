import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClone,
  faDizzy,
  faEnvelope,
  faFileArchive,
  faPaperPlane,
  faStar,
  faTrashCan,
  faWindowRestore,
} from '@fortawesome/free-regular-svg-icons'
import { useMailStore } from '../store/useMailStore'
import { faGear, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { useGetMails } from '../hooks/useGetMails'
import type { Folder } from '../types/email.types'
import { useUiStore } from '../store/useUiStore'

const folders: Folder[] = [
  { text: 'Inbox', icon: faEnvelope },
  { text: 'VIP', icon: faStar },
  { text: 'Draft', icon: faDizzy },
  { text: 'Sent', icon: faPaperPlane },
  { text: 'Spam', icon: faClone },
  { text: 'Bin', icon: faTrashCan },
  { text: 'Archived', icon: faFileArchive },
]

const Folders = () => {
  const { refetch, isFetching } = useGetMails()

  const visibility = useUiStore((state) => state.isVisiable)
  const setVisibility = useUiStore((state) => state.setVisibility)

  const setSelectedTab = useMailStore((state) => state.setTabName)
  const selectedTab = useMailStore((state) => state.selectedTab)

  return (
    <div
      className={`${visibility ? `md:w-full md:px-2.25 px-0 w-0 border-r border-[#3c3c3e]` : ' w-0 px-0 '} transition-all duration-200 bg-[#202023] flex flex-col  overflow-hidden`}
    >
      <div className=" flex justify-between items-center h-12 ">
        <button
          onClick={() => {
            setVisibility(false)
          }}
          title="Hide Inboxes"
          type="button"
          className="h-7 flex items-center justify-center hover:bg-[#35353a] rounded-lg p-1 cursor-pointer"
        >
          <FontAwesomeIcon icon={faWindowRestore} className="text-blue-500  " />
        </button>
        <div className="flex items-center gap-2">
          <button
            title="Refresh"
            type="button"
            onClick={() => {
              refetch()
            }}
            className={`
          ${isFetching ? '' : 'hover:bg-[#35353a] cursor-pointer'}
          h-7 flex items-center justify-center  rounded-lg p-1 `}
          >
            <FontAwesomeIcon
              icon={faRotateRight}
              className={`${isFetching ? `text-blue-900` : `text-blue-500`}  stroke-current`}
            />
          </button>
          <button
            title="Settings"
            type="button"
            className="h-7 flex items-center justify-center hover:bg-[#35353a] rounded-lg p-1 cursor-pointer"
          >
            <FontAwesomeIcon icon={faGear} className="text-blue-500" />
          </button>
        </div>
      </div>
      <h2 className="text-zinc-100 text-[21px] leading-none  font-semibold truncate px-2.25 mb-4">
        Mailboxes
      </h2>
      <div className="flex flex-col mt-1">
        {folders.map((item) => (
          <button
            key={item.text}
            onClick={() => {
              setSelectedTab(item.text)
            }}
            className={`
              flex items-center text-left appearance-none
              gap-2 px-2 pl-4 py-2 leading-none rounded-lg 
              ${selectedTab === item.text ? 'bg-[#35353a] hover:bg-[#4d4d52]' : `hover:bg-[#35353a]`} 
              cursor-pointer min-w-0 `}
          >
            <FontAwesomeIcon
              className={`${item.icon !== faStar ? `text-blue-500 shrink-0` : 'text-yellow-500 shrink-0'}`}
              icon={item.icon}
            />
            <p className=" text-zinc-100 flex-1 truncate min-w-0">
              {item.text}
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Folders
