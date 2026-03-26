import Folders from '../features/Mail/ui/Folders'
import InboxView from '../features/Mail/ui/InboxView'
import MessageView from '../features/Mail/ui/MessageView'
import MailHeader from '../features/Mail/ui/MailHeader';

const MailPage = () => {
  return (
    <>
      <MailHeader/>
      <div className="flex">
        <Folders />
        <InboxView/>
        <MessageView/>
      </div>
    </>
  )
}

export default MailPage
