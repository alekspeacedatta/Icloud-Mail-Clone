import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMailStore } from '../store/useMailStore'
import InboxList from './InboxList'
import { faSearch, faTableList } from '@fortawesome/free-solid-svg-icons'
import { useUiStore } from '../store/useUiStore'
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons'

const InboxView = () => {
  const visibility = useUiStore((state) => state.isVisiable)
  const setVisibility = useUiStore((state) => state.setVisibility)

  const selectedTabName = useMailStore((state) => state.selectedTab)
  const emailsQuantity = useMailStore((state) => state.emailsQuantity)

  return (
    <div className="w-full bg-[#1c1c1e] flex flex-col h-full border-r border-r-[#3c3c3e]">
      <div
        className={`${visibility ? 'px-3.5' : 'pr-3 pl-2'} flex items-start h-12 gap-3`}
      >
        <button
          onClick={() => {
            setVisibility(true)
          }}
          title="Hide Inboxes"
          type="button"
          className={`
            h-7 flex items-center justify-center mt-2.5 transition-all duration-200 
            ${visibility ? 'absolute opacity-0' : ''}
            hover:bg-[#35353a] rounded-lg p-1 cursor-pointer`}
        >
          <FontAwesomeIcon icon={faWindowRestore} className="text-blue-500  " />
        </button>

        <div
          className="  
       
    ring-3 mt-2.5 w-full rounded-lg py-1.75 px-2 flex items-end
  bg-[#323236] ring-[#323236]
  not-focus-within:hover:bg-[#4d4d52] 
  not-focus-within:hover:ring-[#4d4d52]
  focus-within:bg-[#1c1c1e] 
  focus-within:ring-[#0f65bc]"
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="text-[#99998a] text-sm mb-[0.5px]"
          />
          <input
            type="text"
            placeholder="Search"
            className=" 
              caret-[#0f65bc]
               outline-0 pl-1.25 text-zinc-100 h-4
               w-full placeholder:text-[#99998a]"
          />
        </div>
      </div>
      <div className="flex justify-between items-center px-3.75">
        <div className="flex flex-col mt-3 ">
          <h2 className="text-zinc-100 leading-none -mt-3 text-[21px] font-semibold">
            {selectedTabName}
          </h2>
          <p className="text-[#ffffff80] mt-1 leading-none">
            {' '}
            Messages: {emailsQuantity}
          </p>
        </div>
        <button
          title="Filter"
          className="hover:bg-[#35353a] rounded-lg px-1.5 py-0.75 cursor-pointer text-blue-500 text-sm"
        >
          <FontAwesomeIcon icon={faTableList} />
        </button>
      </div>
      <div className="overflow-y-auto gap-1 mt-5 flex-1 min-h-0 px-3.5 scrollbar scrollbar-thumb-[#9f9f9f] scrollbar-thumb-rounded-full scrollbar-track-[#2c2c2c]  ">
        <InboxList />
      </div>
    </div>
  )
}

export default InboxView
