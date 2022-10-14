import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPlaylist, playNow } from '../features/media/mediaSlice'
import Card from 'react-bootstrap/Card';

const AlbumControls = ( album ) => {

    const dispatch = useDispatch();

    const play = () => {
        console.log('album list play')
        dispatch( playNow( album ) )

    }

    return (
        <div className="album-controls">
            <i className="bi bi-play-circle-fill" onClick={play}></i>
            <i className="bi bi-info-circle-fill"></i>
            <i className="bi bi-plus-circle-fill"></i>
        </div>
    );
}

export const Album = ( data ) => {

    const album = data.album;
    const [ showControls, setShowControls ] = useState(false);

    const loadArtist = ( e ) => {
        console.log(e, album)
    }

    const showOptions = (e) => {
        if( showControls ){
            return
        }
        setShowControls(true);
        console.log( e )
    }

    const hideOptions = (e) => {
        setShowControls(false);
    }

    return (
        <Card className="album">
            <Card.Body>
                <Card.Img
                    as="div"
                    variant="top"
                    className="img-wrap"
                    onMouseEnter={showOptions}
                    onMouseLeave={hideOptions}
                >
                    { showControls && <AlbumControls album={album}/>}
                    <Card.Img src={album.art} />
                </Card.Img>
            </Card.Body>
            <Card.Body>
                <Card.Title as="h5" onClick={loadArtist} >{album.name}</Card.Title>
                <Card.Text
                    as="h5"
                    className="artist-name"
                    onClick={loadArtist}
                >
                {album.artist.name}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}