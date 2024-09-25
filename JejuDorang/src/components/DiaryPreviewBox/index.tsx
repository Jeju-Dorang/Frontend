import { DiaryPreview } from "@type/diaryPreview";

const DiaryPreviewBox = ({title, content, status} : DiaryPreview) => {
    return(
        <button className="flex flex-col h-[75px] w-80 border border-gray-dg rounded-[10px]
                        items-start justify-center">
            <div className="flex flex-row ml-5 mt-4">
                <h2 className="text-[12px] font-semibold text-black">
                    제목 : {title}
                </h2>
                <p className={`ml-3 text-[11px] font-semibold 
                                ${status === 'Private' ? 
                                'text-gray-dg' : 
                                'text-primary-blue'}`}>
                    {status}
                </p>
            </div>
            <h3 className="flex-grow w-72 text-[12px] font-normal text-black ml-5 mt-1 mr-5
                            whitespace-nowrap overflow-hidden text-ellipsis">
                내용 : {content}
            </h3>

        </button>

    );
}

export default DiaryPreviewBox;
