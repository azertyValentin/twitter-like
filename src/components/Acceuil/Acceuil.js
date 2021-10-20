import NewTweet from '../NewTweet/NewTweet';
import TweetList from '../TweetList/TweetList';
import './Acceuil.css'

function Acceuil() {
    return (
        <>
            <div className="title-container">
                <h1>Acceuil</h1>
            </div>
            <NewTweet/>
            <TweetList/>
        </>
    )
}

export default Acceuil;