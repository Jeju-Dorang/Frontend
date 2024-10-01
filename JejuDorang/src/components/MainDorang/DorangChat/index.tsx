import dorangChat from '#img/dorangChat.webp';

const DorangChat = () => {
  return (
    <div className="w-4/5 h-[31px] border bg-white font-semibold text-[14px] flex items-center justify-between rounded-[8px] relative">
      <div className="absolute left-[7px] top-1/2 transform -translate-y-1/2">
        <div className="relative">
          <img
            src={dorangChat}
            alt={'dorangChat'}
            className="w-[31px] h-[31px]"
          />
          <span className="absolute inset-0 flex items-center justify-center z-10 text-[11px]">
            도랑이
          </span>
        </div>
      </div>
      <div className="flex-grow text-center">오늘은 어디를 가볼까?</div>
    </div>
  );
};

export default DorangChat;
