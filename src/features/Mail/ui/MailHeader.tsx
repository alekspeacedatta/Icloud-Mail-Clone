import { faAddressBook, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MailHeader = () => {
  return (
    <header className='bg-[#323236]  border-b border-[#3c3c3e] flex justify-between px-3 py-1'>
        <div className='flex items-center '>
          <FontAwesomeIcon icon={faAddressBook} className='mr-1 text-white text-[21px] font-semibold'/>
          <h3 className='text-white text-[21px] font-semibold leading-0'>
            ilex<span className='text-[#009aff]'>Mail</span>
          </h3>
        </div>
        <div className='flex items-center gap-1'>
          <div className='w-9 h-8.75 hover:bg-[#464647] rounded-lg flex items-center justify-center cursor-pointer'>
            <FontAwesomeIcon icon={faCirclePlus} className='text-[17px] text-zinc-100 hover:bg-[#464647] '/>
          </div>
          <div className='w-9 h-8.75 hover:bg-[#464647] rounded-lg flex items-center justify-center cursor-pointer'>
            <FontAwesomeIcon icon={faUserCircle} className='text-[25px] text-zinc-100 hover:bg-[#464647] '/>
          </div>
        </div>
      </header>
  )
}

export default MailHeader
