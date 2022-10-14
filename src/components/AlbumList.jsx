import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { selectSession } from '../features/user/userSlice'
import ListGroup from 'react-bootstrap/ListGroup';
import { Album } from './Album';

import axios from "axios";

import '../scss/AlbumList.scss';

export const AlbumList = ( ) => {
    const [page, setPage] = useState(0),
        [items, setItems] = useState([]),
        itemsPerPage = 20,
        session = useSelector( selectSession );

    useEffect( () => {
        const params = {
            auth: session.auth,
            action: 'albums'
        }
console.log('albumslist', session)
        //Move to a global API
        axios.get( '/server/json.server.php', { params: params } )
        .then( res => res.data )
        .then( (data) => {

            if( data.error ){
                return;
            }
            //move to a central location
            //check for actual error session expired
            if( data.hasOwnProperty('error') ){
                console.log('Error: album list api call')
            }
            setItems( data.album )
        })
    }, [page] )

    const Albums = items.map( (album) => {
        return <Album album={album} key={album.id}/>;
    })

    return (
        <ListGroup as="div" className="crate">{Albums}</ListGroup>
    )
}
    // {
    //     "id": "13",
    //     "name": "!?!",
    //     "artist": {
    //         "id": "11",
    //         "name": "Vaporwave and Philosophy"
    //     },
    //     "time": 781,
    //     "year": 2021,
    //     "tracks": [],
    //     "songcount": 5,
    //     "diskcount": 1,
    //     "type": null,
    //     "genre": [],
    //     "art": "http:\/\/localhost\/image.php?object_id=13&object_type=album&auth=d5f9e192b2966c6d63ba518f97893ffe",
    //     "flag": 0,
    //     "preciserating": null,
    //     "rating": null,
    //     "averagerating": null,
    //     "mbid": null
    // },
