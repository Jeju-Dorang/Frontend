import defaultImage from "#img/profile.webp";

interface Props {
    name : string;
    profileImage? : string;
    setImageSrc : (imageSrc : string) => void;
}

const Profile = ({name, profileImage, setImageSrc}:Props) => {

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageSrc(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
        <div className="flex flex-col mt-2 ml-7 mb-4">
            <h3 className="text-black font-semibold text-[16px]">
                프로필
            </h3>
            <div className='flex flex-row mt-4 items-center justify-between'>
                {profileImage?
                    <img src={profileImage} className="w-[87px] h-[87px]" />
                    :<img src={defaultImage} className="w-[87px] h-[87px]" />
                }
                <input 
                type="file" 
                id="file-upload" 
                accept="image/*" 
                onChange={uploadImage} 
                className="hidden" 
                />
                <div className="flex flex-col justify-start mr-12">
                    <h2 className="text-black font-semibold text-[20px]">
                        {name}
                    </h2>
                    <h3 className="text-gray-dg font-medium text-[13px] mt-1">
                        제주도랑 프로필에서는 로그인한 카카오<br/>
                        계정 기본 닉네임이 노출됩니다.
                    </h3>
                </div>
            </div>
        </div>
        <hr />
        </>

    );
}

export default Profile