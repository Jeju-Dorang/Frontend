import DorangAcitivity from "./DorangActivity";
import LocationAcitivity from "./LocationActivity";


interface Props {
    status: boolean;
}

const AcitivityDetail= ({status}:Props) => {
    return(
        <div className="flex w-[100%] top-[88px]">
            {!status ? <LocationAcitivity /> : <DorangAcitivity />}
        </div>
    );
}

export default AcitivityDetail;