import './ProfilePicture.css'
import {connect} from 'react-redux'

function ProfilePicture(props) {
    return (
        <img src={props.user.photo} alt="profile_picture" className="profile_picture" style={{width: props.imageSize}}/>
    )
}

const mapStateToProps = state => {
    return { user: state.user }
}

export default connect(mapStateToProps)(ProfilePicture);