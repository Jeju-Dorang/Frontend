import mainDorang from '#img/dorang/defaultDorang.webp';

interface CharacterProps {
  itemImageUrl: string | null;
  petImageUrl: string | null;
}

const Character = ({ itemImageUrl, petImageUrl }: CharacterProps) => {
  const renderImage = (url: string | null, className: string) => {
    if (url && url !== '0') {
      return <img src={url} alt="" className={className} />;
    }
    return null;
  };

  return (
    <div className="relative h-[198px] w-[192px] mb-[29px]">
      <img
        src={mainDorang}
        alt="character"
        className="h-full w-full object-cover"
      />
      {renderImage(
        itemImageUrl,
        'absolute left-[25px] bottom-3 h-[40px] w-auto',
      )}
      {renderImage(
        petImageUrl,
        'absolute right-[-30px] bottom-[-5px] h-[90px] w-auto',
      )}
    </div>
  );
};

export default Character;
