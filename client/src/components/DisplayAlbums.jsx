import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function DisplayAlbums(){
    const [isLoaded, setLoad] = useState(false);
    const [albums, setAlbums] = useState({});

    //generate random number
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

    const api = process.env.REACT_APP_API_URL;

    //fetch album
    function getRandomAlbum(num){
        console.log(api + `${num}`);
        try {
            axios.get(api + `${num}`)
            .then(response => {
                setLoad(true);
                console.log(response.data);
                setAlbums(response.data);
            }).catch((err) => console.log(err));
        } catch(err)
        { 
            console.log(err) 
        }
    }

    return (
        <>
            <div className="main-content">
                { !isLoaded ? 
                    <div className="content">
                        <p>Need something to listen to?</p>
                        <button onClick={() => getRandomAlbum(getRandomInt(150))}>shuffle</button>
                    </div> : 
                    <div className="content">
                        <img src={albums.albumPictureUrl}/>
                        <p>{albums.album}</p>
                        <p>{albums.artist}</p>
                        <p>Want something different?</p>
                        <button onClick={() => getRandomAlbum(getRandomInt(150))}>re-shuffle</button>
                    </div>
                } 
            </div>
        </>
    );
}