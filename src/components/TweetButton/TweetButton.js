import './TweetButton.css'

function TweetButton({disabled, onClick}) {
    return (
        <button disabled={disabled} className="button" onClick={onClick}>Tweeter</button>
    )
}

export default TweetButton;