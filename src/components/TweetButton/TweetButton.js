import './TweetButton.css'

function TweetButton({disabled}) {
    return (
        <button disabled={disabled} className="button">Tweeter</button>
    )
}

export default TweetButton;