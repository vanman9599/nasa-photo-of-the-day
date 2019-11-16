import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default function PhotoList(){
    const [photo, setPhoto] = useState([]);
    
    useEffect(() => {
        axios   
            .get('https://api.nasa.gov/planetary/apod?api_key=xeNDG1r4sOVKHXTllHhknNpinAwPJ2aHGletBOuo')
            .then(res => {
                setPhoto(res.data)
                console.log(res.data)
            })
            .catch(error => {
                console.log('The data was not returned', error)
            })
    }, [])

    return(
        <div className="photo">
            <PhotoCard
                key={Date.now()  }
                url={photo.url}
                explanation={photo.explanation}
                title={photo.title}
            />
                </div>
    )
}