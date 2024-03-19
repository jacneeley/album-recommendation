import React from "react";
import { useEffect, useState } from "react";

export default function DisplayAlbums(){
    const [api, setApi] = useState("");
    //const [albums, setAlbums] = useState([]);
    
    //fetch api url from .env
    function getProxy(){
        try {
            const proxy_url = process.env.REACT_APP_API_URL;
            console.log("Fetched URL:", proxy_url);
            setApi(proxy_url);
        } 
        catch(err) {
            console.log(err);
        }
    };

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
        if(!api){
            getProxy();
        }
    },[api]);

    useEffect(() => {
        if(api){
            console.log(api);
            getRandomAlbum(api, getRandomInt(150));
        }
    }, [api])

    return (
        <>
        </>
    );
}