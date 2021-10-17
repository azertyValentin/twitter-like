import ProfilePicture from '../ProfilePicture/ProfilePicture';
import WordCount from '../WordCount/WordCount';
import './NewTweet.css'
import {useState} from 'react'
import TweetButton from '../TweetButton/TweetButton';

function NewTweet() {
    const [count, setCount] = useState(0);

    const draftTweetChange = (e) => {
        setCount(e.target.value.length)
    }

    return (
        <>
            <ProfilePicture imageSize={60}/>
            <input type="text" placeholder="Quoi de neuf ?" className="textInput" onChange={draftTweetChange} maxLength="25"/>
            <WordCount count={count}/>
            <TweetButton disabled={count === 0}/>
        </>
    )
}

export default NewTweet;