import {connect} from 'react-redux'
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import User from '../../models/User'
import logo from '../../assets/profile_picture.jpg'

function Profil(props) {
    const nameChanged = (e) => {
        props.dispatch({
            type: 'CHANGE_NAME',
            payload: new User(e.target.value, props.user.username, logo)
        })
    }

    return (
        <>
            <ProfilePicture imageSize={200}></ProfilePicture>
            <h1>{props.user.name} @{props.user.username}</h1>
            <p>Mettre à jour le nom:</p>
            <input onChange={nameChanged}></input>
        </>
    )
}

const mapStateToProps = state => {
    return { user: state.user }
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);