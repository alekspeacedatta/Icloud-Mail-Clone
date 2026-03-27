const MessageView = () => {
  return (
    <>
      <div className="flex flex-col w-2/7 bg-[#1c1c1e] min-h-[calc(100dvh-44px)] ">
        <div className="bg-[#2c2c2c] h-10"></div>
        <div className="h-full flex items-center justify-center ">
          <h2 className="text-[28px] text-[#3d3d41]">No Selected Message</h2>
        </div>
      </div>
    </>
  )
}

export default MessageView
