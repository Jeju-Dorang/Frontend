import mainDorang from '#img/dorang/defaultDorang.webp';

interface CharacterProps {
  itemImageUrl: string | undefined;
  petImageUrl: string | undefined;
}

const Character = ({ itemImageUrl, petImageUrl }: CharacterProps) => {
  return (
    <div className="relative h-[198px] w-[192px] mb-[29px]">
      <img
        src={mainDorang}
        alt="character"
        className="h-full w-full object-cover"
      />
      <img
        src={itemImageUrl}
        className="absolute left-[25px] bottom-3 h-[40px] w-auto"
      />
      <img
        src={petImageUrl}
        className="absolute right-[-30px] bottom-[-5px] h-[90px] w-auto"
      />
    </div>
  );
};

export default Character;
