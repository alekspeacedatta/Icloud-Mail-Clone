import { useEffect, useMemo, useState } from "react"
import { useGetMails } from "../hooks/useGetMails";
import type { Email } from "../types/email.types";
import { useMailStore } from "../store/useMailStore";

const InboxList = () => {
    const { data, isLoading, isError } = useGetMails();
    
    const [ SelectedMessageId, setSelectedMessageId ] = useState<number | null>(null);
    const selectedTabName = useMailStore((state) => state.selectedTab)
    const setEmailsQuantity = useMailStore((state) => state.setEmailsQuantity)
    
    const filteredEmails = useMemo(() => {
        if(!data) return [];
        return data.filter((item : Email) => item.type === selectedTabName);
    }, [data, selectedTabName])
    
    useEffect(() => {
        setEmailsQuantity(filteredEmails.length);
    }, [filteredEmails])
    
    if (isLoading) {
        return <p className="text-[#ffffff80] px-2">Loading messages...</p>;
    }
    if (isError || !data) {
        return <p className="text-red-400 px-2">Failed to load messages.</p>;
    }
  return (
    <>
        {filteredEmails.map((item : Email) => (
            <>
                <div key={item.id} className={`px-6 py-2 rounded-xl cursor-pointer border-b rounded-b-none border-[#35353a] leading-none ${ SelectedMessageId === item.id ? `bg-[#009aff] rounded-b-xl` : `hover:bg-[#35353a]`}`} onClick={() => { setSelectedMessageId(item.id) }}>
                    <div className="flex gap-1 justify-between">
                        <h4 className="text-[17px] text-zinc-100 font-semibold truncate">{item.Author}</h4>
                        <p className="text-sm text-[#ffffff80] font-medium">14:34</p>
                    </div>
                    <h5 className="text-zinc-100 mt-1 text-sm truncate">{item.subject}</h5>
                    <p className={`text-sm text-[#ffffff80] line-clamp-2`}>{item.description}</p>
                </div>
            </>
            
        ))}
    </>
  )
}

export default InboxList