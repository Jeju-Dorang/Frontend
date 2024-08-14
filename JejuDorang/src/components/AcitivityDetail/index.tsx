import DorangAcitivity from "./DorangActivity";
import LocationAcitivity from "./LocationActivity";

interface Props {
    status: number;
}

const AcitivityDetail= ({status}:Props) => {
    return(
        <div className="w-[100%] top-[88px]">
            {status === 0 ? <LocationAcitivity /> : <DorangAcitivity />}
        </div>
    );
}

export default AcitivityDetail;