import Folders from '../features/Mail/ui/Folders'
import InboxView from '../features/Mail/ui/InboxView'
import MessageView from '../features/Mail/ui/MessageView'
import MailHeader from '../features/Mail/ui/MailHeader'

const MailPage = () => {
  return (
    <div>
      <MailHeader />
      <div className="flex h-[calc(100dvh-44px)]">
        <Folders />
        <InboxView />
        <MessageView />
      </div>
    </div>
  )
}

export default MailPage
