import {connect} from 'react-redux'
import TweetRepresentation from '../TweetRepresentation/TweetRepresentation'
import './TweetList.css'

function TweetList({tweets}) {
    const tweetList = tweets.map((tweet) => 
        <li key={tweet}><TweetRepresentation tweet={tweet}></TweetRepresentation></li>
    )
    return (
        <ul>{tweetList}</ul>
    )
}

const mapStateToProps = state => {
    return { tweets: state.tweets }
}

export default connect(mapStateToProps)(TweetList);