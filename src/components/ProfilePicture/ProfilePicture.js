import logo from '../../assets/profile_picture.jpg'
import './ProfilePicture.css'

function ProfilePicture({imageSize}) {
    return (
        <img src={logo} alt="profile_picture" className="profile_picture" style={{width: imageSize}}/>
    )
}

export default ProfilePicture;