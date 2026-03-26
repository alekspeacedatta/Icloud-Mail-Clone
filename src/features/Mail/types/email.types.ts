export type Email = {
    id: number,
    type: 'Sent' | 'Income' | 'Draft' | 'Bin' | 'Archived' | 'VIP'
    Author: string,
    subject: string,
    description: string
}