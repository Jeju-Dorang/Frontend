import AcitivityDetail from "@components/AcitivityDetail";
import { useState } from "react";



const Activity=() =>{
    const [selected, setSelected] = useState<boolean>(false);

    // 버튼 클릭 핸들러
    const handleHeaderSwitch = (buttonId : boolean) => {
        setSelected(buttonId);
    };

    return (
        <>
            <header className = "w-[100%] h-[88px] ml-[27px] mr-[166px] gap-[22px] flex items-center">
                <button onClick={() => handleHeaderSwitch(false)}>
                    <p className = {`text-[14px] font-semibold ${
                        !selected ? 'text-primary-orange':'text-gray-dg'}`}>
                        위치 기반 추천
                    </p>
                </button>
                <button onClick={() => handleHeaderSwitch(true)}>
                    <p className = {`text-[14px] font-semibold ${
                        selected ? 'text-primary-orange':'text-gray-dg'}`}>
                        도랑이 추천
                    </p>
                </button>
            </header>
            
            <AcitivityDetail status={selected} />
        </>
    );
    

}

export default Activity;