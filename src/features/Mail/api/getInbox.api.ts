import type { Email } from '../types/email.types'

export const getInbox = async (): Promise<Email[]> => {
  try {
    const response = await fetch(
      'https://my.api.mockaroo.com/mails.json?key=8d271710',
    )
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(
      `Failed to fetch inbox: ${error instanceof Error ? error.message : 'Unknown error'}`,
    )
  }
}
