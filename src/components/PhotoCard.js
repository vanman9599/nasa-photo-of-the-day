import React from 'react';


const PhotoCard = props => {
    return(
        <div className="photo-card">
            <h1>NASA Photo of the Day</h1>
            <h2>{props.title}</h2>
            <img className="image-of-day" alt="NASA" src={props.url} />
    `           <p>{props.explanation}</p>`
                <span>Copyright: {props.copyright}</span>
            
        </div>
    )
}

export default PhotoCard;