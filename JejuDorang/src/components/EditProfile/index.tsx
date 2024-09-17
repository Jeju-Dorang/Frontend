import Header from "./Header";
import Message from "./Message";
import Place from "./Place";
import Profile from "./Profile";
import Withdraw from "./Withdraw";

const EditProfile = () => {
    return (
        <>
        <Header />
        <Profile name='김제주'/>
        <Message />
        <Place place='카세로지 게스트하우스'/>
        <Withdraw />
        </>

    );
}

export default EditProfile;