import ProfilePicture from "../ProfilePicture/ProfilePicture";
import './TweetRepresentation.css'

function TweetRepresentation({tweet}) {
    return (
        <div className="tweet-representation-container">
            <ProfilePicture imageSize={60}/>
            <p className="tweet-header"><b>{tweet.user.name}</b> @{tweet.user.username} - {tweet.date}</p>
            <p className="tweet-content">{tweet.content}</p>
        </div>
    )
}

export default TweetRepresentation;