interface Props {
  imgSrc: string;
  userName: string;
  viewStatus: boolean;
  onClick: () => void;
}

const Story = ({ imgSrc, userName, viewStatus, onClick }: Props) => {
  return (
    <div className="flex flex-col items-center w-[70px]" onClick={onClick}>
      <div
        className={`w-[58px] h-[58px] overflow-hidden rounded-full border-[3px] cursor-pointer ${
          viewStatus ? 'border-gray-lg' : 'border-primary-orange'
        }`}
      >
        <img
          src={imgSrc}
          alt={`${userName}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-[12px] font-semibold mt-1 text-center truncate w-full">
        {userName}
      </div>
    </div>
  );
};

export default Story;
