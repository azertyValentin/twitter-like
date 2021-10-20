import ProfilePicture from '../ProfilePicture/ProfilePicture';
import WordCount from '../WordCount/WordCount';
import './NewTweet.css'
import {useState} from 'react'
import TweetButton from '../TweetButton/TweetButton';
import {connect} from 'react-redux'
import Tweet from '../../models/Tweet'

function NewTweet(props) {
    const [count, setCount] = useState(0);
    const [tweet, setTweet] = useState('');

    const draftTweetChange = (e) => {
        setCount(e.target.value.length)
        setTweet(e.target.value)
    }

    const addTweet = () => {
        props.dispatch({
            type: 'ADD_TWEET',
            payload: new Tweet(props.user, getCurrentDate(), tweet)
        })
        setTweet('')
        setCount(0)
    }

    const getCurrentDate = () => {
        return new Date(Date.now()).toLocaleDateString()
    }

    return (
        <div className="new-tweet-container">
            <ProfilePicture imageSize={60}/>
            <input value={tweet} type="text" placeholder="Quoi de neuf ?" className="textInput" onChange={draftTweetChange} maxLength="25"/>
            <div className="sub-container">
                <WordCount count={count}/>
                <TweetButton disabled={count === 0} onClick={addTweet}/>
            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewTweet);