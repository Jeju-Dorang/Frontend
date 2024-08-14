import dorangChat from '#img/dorangChat.webp';

const DorangChat = () => {
  return (
    <div className="w-4/5 h-[31px] border bg-white font-semibold text-[14px] text-center flex items-center rounded-[8px]">
      <div className="relative mb-[30px] mx-[7px]">
        <img
          src={dorangChat}
          alt={'dorangChat'}
          className="w-full h-full object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center z-10 text-[11px]">
          도랑이
        </span>
      </div>
      오늘은 어디를 가볼까?
    </div>
  );
};

export default DorangChat;
