import React from "react";
import { useEffect, useState } from "react";

export default function DisplayAlbums(){
    //const [albums, setAlbums] = useState([]);

    //generate random number
    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }

    //fetch album
    function getRandomAlbum(proxy_url, num){
        
        console.log(proxy_url + `${num}`);
        try {
            fetch(proxy_url + `${num}`, {
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json',
                    'crossDomain': true
                }
            })
            .then(response => response.json())
            .then(albumData => {
                console.log(albumData);
            });
        } catch(err)
        { 
            console.log(err) 
        }
    }

    useEffect(() => {
        getRandomAlbum(process.env.REACT_APP_API_URL, getRandomInt(150));
    }, [])

    return (
        <>
        </>
    );
}