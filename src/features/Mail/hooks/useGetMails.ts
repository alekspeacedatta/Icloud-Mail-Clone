import { useQuery } from "@tanstack/react-query"
import { getInbox } from "../api/getInbox.api"
import type { Email } from "../types/email.types"

export const useGetMails = () => {
    return useQuery<Email[]>({
        queryKey: ['emails'],
        queryFn: getInbox,
        staleTime: 5 * 60 * 1000
    })
}