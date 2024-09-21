import DorangAcitivity from "./DorangActivity";
import LocationAcitivity from "./LocationActivity";


interface Props {
    status: boolean;
}

const AcitivityDetail= ({status}:Props) => {
    return(
        <div className="flex top-[88px]">
            {!status ? <LocationAcitivity /> : <DorangAcitivity />}
        </div>
    );
}

export default AcitivityDetail;