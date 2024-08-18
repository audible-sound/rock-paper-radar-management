import Input from '../ui/Input';

const ProfileForm = () => {
    return(
        <div className="w-full flex flex-col max-w-[300px]">
        <Input 
            type="file"
            left={"Profile Picture"} 
            registerInput={"profilePicture"}
            required={"This is required"}
        />
        <Input 
            type="text"
            left={"Profile Description"} 
            registerInput={"description"}
            placeholder={"Enter your profile description"}
            required={"This is required"}
        />
    </div>
    )
}

export default ProfileForm