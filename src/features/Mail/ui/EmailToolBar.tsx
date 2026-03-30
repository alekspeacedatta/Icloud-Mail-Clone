import {
  faFolderClosed,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-regular-svg-icons'
import {
  faRedo,
  faUndo,
  faShare,
  faPersonDotsFromLine,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMailStore } from '../store/useMailStore'
const iconButtons = [
  { icon: faRedo, action: () => {}, label: 'Reply' },
  { icon: faUndo, action: () => {}, label: 'Reply All' },
  { icon: faShare, action: () => {}, label: 'Share' },
  { icon: faFolderClosed, action: () => {}, label: 'Move to...' },
  { icon: faTrashCan, action: () => {}, label: 'Move to Bin' },
  { icon: faPersonDotsFromLine, action: () => {}, label: 'Other actions' },
]
const EmailToolBar = () => {
  const email = useMailStore((state) => state.email)

  return (
    <div
      className={` 
        group relative flex items-center justify-center transition-colors duration-250
        ${email ? 'bg-transparent' : `bg-[#2c2c2c] pointer-events-none`} h-12`}
    >
      <div className="flex items-center gap-1.5">
        {iconButtons.map((btn, index) => (
          <button
            className="
                        group enabled:hover:bg-[#35353a]
                        rounded-lg px-1.5 py-1 enabled:cursor-pointer
                        "
            onClick={btn.action}
            title={btn.label}
            key={index}
            disabled={!email}
          >
            <FontAwesomeIcon
              icon={btn.icon}
              className="text-blue-500 text-[15px] group-disabled:text-[#1a5782]"
            />
          </button>
        ))}
      </div>
      <button
        title="Create New Message"
        className=" group right-3  absolute enabled:hover:bg-[#35353a] rounded-lg px-1.75 py-0.75 enabled:cursor-pointer"
        disabled={!email}
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="text-blue-500 text-[15px] group-disabled:text-[#1a5782]"
        />
      </button>
    </div>
  )
}

export default EmailToolBar
