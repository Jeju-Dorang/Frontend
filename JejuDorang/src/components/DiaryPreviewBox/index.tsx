import { DiaryPreview } from "@type/diaryPreview";

interface Props extends DiaryPreview {
    setIsViewDiary: (diaryId: number) => void;
}

const DiaryPreviewBox = ({diaryId, title, content, secret, setIsViewDiary}:Props) => {

    const handleViewDiary = () => {
        setIsViewDiary(diaryId);
    }

    return(
        <button 
                onClick = {handleViewDiary}
                className="flex flex-col h-[75px] w-80 border border-gray-dg rounded-[10px]
                        items-start justify-center">
            <div className="flex flex-row ml-5 mt-2">
                <h2 className="text-[12px] font-semibold text-black">
                    제목 : {title}
                </h2>
                <p className={`ml-3 text-[11px] font-semibold 
                                ${secret === 'private' ? 
                                'text-gray-dg' : 
                                'text-primary-blue'}`}>
                    {secret}
                </p>
            </div>
            <h3 className="flex w-72 text-[12px] font-normal text-black ml-5 mt-1 mr-5
                            whitespace-nowrap overflow-hidden text-ellipsis">
                내용 : {content}
            </h3>

        </button>

    );
}

export default DiaryPreviewBox;
