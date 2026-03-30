import { useEffect, useMemo } from 'react'
import { useGetMails } from '../hooks/useGetMails'
import type { Email } from '../types/email.types'
import { useMailStore } from '../store/useMailStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

const InboxList = () => {
  const { data, isLoading, isError } = useGetMails()

  const selectedTabName = useMailStore((state) => state.selectedTab)
  const setEmailsQuantity = useMailStore((state) => state.setEmailsQuantity)
  const setEmail = useMailStore((state) => state.setEmail)
  const clearEmail = useMailStore((state) => state.clearEmail)
  const email = useMailStore((state) => state.email)

  const filteredEmails = useMemo(() => {
    if (!data) return []
    return data.filter((item: Email) => item.type === selectedTabName)
  }, [data, selectedTabName])

  useEffect(() => {
    clearEmail()
  }, [selectedTabName, clearEmail])

  useEffect(() => {
    setEmailsQuantity(filteredEmails.length)
  }, [filteredEmails, setEmailsQuantity])

  if (isLoading) {
    return <p className="text-[#ffffff80] px-2">Loading messages...</p>
  }
  if (isError || !data) {
    return <p className="text-red-400 px-2">Failed to load messages.</p>
  }
  return (
    <>
      {filteredEmails.map((item: Email) => (
        <div
          key={item.id}
          className={`
              mb-px
              [&_h5]:cursor-default [&_p]:text-sm [&_p]:cursor-default [&_h4]:cursor-default
              [&_*:not(button,div)]:cursor-text
              peer rounded-t-xl
              px-6 py-3 rounded-xl 
              border-[#35353a] leading-none group
              ${email?.id === item.id ? `bg-[#009aff] rounded-xl border-transparent` : `hover:bg-[#35353a] hover:rounded-xl hover:border-transparent`}`}
          onClick={() => {
            if (email?.id === item.id) {
              clearEmail()
            } else {
              setEmail(item)
            }
          }}
        >
          <div className="flex gap-1 justify-between leading-none">
            <h4 className="text-[17px] text-zinc-100 font-semibold ">
              {item.Author}
            </h4>
            <div className="flex items-center gap-1.75">
              <p
                className={` ${email?.id === item.id ? 'text-white' : 'text-[#ffffff80]'} `}
              >
                14:34
              </p>
              <button
                className={` ${email?.id === item.id ? 'text-[#009aff] bg-white' : 'text-[#20202393] bg-[#ffffff80]'}
                  h-3.5 w-3.5 items-center justify-center  hidden group-hover:flex
                  rounded-full text-xs cursor-pointer`}
              >
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </div>
          </div>
          <h5 className="text-zinc-100 text-sm truncate ">{item.subject}</h5>
          <p className={`text-[#ffffff80] line-clamp-2`}>{item.description}</p>
        </div>
      ))}
    </>
  )
}

export default InboxList
