import DorangAcitivity from "./DorangActivity";
import LocationAcitivity from "./LocationActivity";


interface Props {
    status: boolean;
}

const AcitivityDetail= ({status}:Props) => {
    return(
        <div className="flex flex-col mr-6">
            {!status ? <LocationAcitivity /> : <DorangAcitivity />}
        </div>
    );
}

export default AcitivityDetail;