import { useNavigate } from "react-router-dom";

interface Props {
    onChangeOpenPost : () => void;
    
}

const SelectModal = ({onChangeOpenPost}:Props) => {

    const navigate = useNavigate();

    return (
            <>
                <div className="fixed inset-0 bg-gray-dg bg-opacity-20 flex items-center justify-center">
                    <div className="flex flex-col w-[300px] h-[300px] rounded-[8px] shadow-sm bg-white border border-gray-dg items-center justify-center">
                        <h2 className='font-semibold text-[28px] text-primary-orange text-center'>
                            숙소 설정 방식을 <br/>
                            선택해주세요
                        </h2>
                        <h3 className='font-medium text-[16px] text-[#777] mt-2 text-center'>
                            숙소 추천을 받아보세요!<br/>
                            맞춤형 숙소를 추천해드립니다
                        </h3>
                        <div className="flex flex-col mt-4 gap-3">
                            <button 
                                onClick={() => {navigate('/stay')}} 
                                className="bg-primary-orange py-2 w-[242px] h-[40px] text-white
                                            rounded-[8px] items-center justify-center text-[16px] font-semibold"
                            >
                                숙소 추천 받기
                            </button>
                            <button 
                                onClick={onChangeOpenPost} 
                                className="bg-primary-orange py-2 w-[242px] h-[40px] text-white
                                            rounded-[8px] items-center justify-center text-[16px] font-semibold"
                            >
                                숙소 직접 입력
                            </button>
                        </div>
                    </div>
                </div>
            </>
    );
};

export default SelectModal;