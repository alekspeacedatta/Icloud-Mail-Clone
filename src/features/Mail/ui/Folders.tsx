import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faDizzy, faEnvelope, faFileArchive, faPaperPlane, faStar, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { useMailStore } from '../store/useMailStore'

const ragaca = [
    { text: 'Incomes', icon: faEnvelope },
    { text: 'VIP', icon: faStar },
    { text: 'Draft', icon: faDizzy },
    { text: 'Sent', icon: faPaperPlane },
    { text: 'Spam', icon: faClone },
    { text: 'Bin', icon: faTrashCan },
    { text: 'Archived', icon: faFileArchive },
]

const Folders = () => {
    const setSelectedTab = useMailStore((state) => state.setTabName);
    const SelectedTab = useMailStore((state) => state.selectedTab);
    
    const setTabName = ( tabName : string ) => {
        setSelectedTab(tabName)
    }
  return (
    <div className="bg-[#202023] flex flex-col w-1/3 gap-2 border-r border-[#3c3c3e] p-4  overflow-hidden">
      <h2 className="text-zinc-100 text-2xl font-semibold truncate">Mail Boxes</h2>
      <div className="flex flex-col">
        {ragaca.map(ragac => (
            <div key={ragac.text} onClick={() => { setTabName(ragac.text) }} className={`flex items-center gap-2 px-2 pl-4 py-2 leading-none rounded-lg ${SelectedTab === ragac.text ? 'bg-[#35353a] hover:bg-[#4d4d52]' : `hover:bg-[#35353a]`}   cursor-pointer min-w-0 `}>
            <FontAwesomeIcon className={`${ragac.icon != faStar ? `text-blue-500 shrink-0` : 'text-yellow-500 shrink-0'}`} icon={ragac.icon} />
                <p className=" text-zinc-100 flex-1 truncate min-w-0">
                    {ragac.text}
                </p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Folders
