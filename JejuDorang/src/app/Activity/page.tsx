import AcitivityDetail from "@components/AcitivityDetail";
import { useState } from "react";



const Activity=() =>{
    const [selected, setSelected] = useState<number>(0);

    // 버튼 클릭 핸들러
    const handleHeaderSwitch = (buttonId : number) => {
        setSelected(buttonId);
    };

    return (
        <>
            <header className = "w-[100%] h-[88px] pl-[27px] pr-[166px] gap-[22px] flex items-center">
                <button onClick={() => handleHeaderSwitch(0)}>
                    <p className = {`text-[14px] font-semibold ${
                        selected === 0 ? 'text-primary-orange':'text-gray-dg'}`}>
                        위치 기반 추천
                    </p>
                </button>
                <button onClick={() => handleHeaderSwitch(1)}>
                    <p className = {`text-[14px] font-semibold ${
                        selected === 1 ? 'text-primary-orange':'text-gray-dg'}`}>
                        도랑이 추천
                    </p>
                </button>
            </header>
            
            <AcitivityDetail status={selected} />
        </>
    );
    

}

export default Activity;