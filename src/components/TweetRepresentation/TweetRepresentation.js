import ProfilePicture from "../ProfilePicture/ProfilePicture";
import './TweetRepresentation.css'
import {connect} from 'react-redux'

function TweetRepresentation(props) {
    const deleteTweet = () => {
        props.dispatch({
            type: 'REMOVE_TWEET',
            payload: props.tweet
        })
    }

    return (
        <div className="tweet-representation-container">
            <ProfilePicture imageSize={60}/>
            <p className="tweet-header"><b>{props.tweet.user.name}</b> @{props.tweet.user.username} - {props.tweet.date}</p>
            <p className="tweet-content">{props.tweet.content}</p>
            <button onClick={deleteTweet}>Suppr.</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      dispatch
    }
}

export default connect(mapDispatchToProps)(TweetRepresentation);