import NewTweet from '../NewTweet/NewTweet';
import './Acceuil.css'

function Acceuil() {
    return (
        <>
            <div className="title-container">
                <h1>Acceuil</h1>
            </div>
            <NewTweet/>
        </>
    )
}

export default Acceuil;