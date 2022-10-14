import {useState, useEffect, createContext, useContext, useMemo, useRef} from "react";
import ReactPlayer from 'react-player';
import AudioPlayer from 'react-h5-audio-player';
import axios from "axios"
//This npm is more bareboness
//https://github.com/goldfire/howler.js#documentation

import { useSelector, useDispatch } from 'react-redux'
import { addPlaylist, playNow, selectMedia } from '../features/media/mediaSlice'

const MediaContext = createContext();

export const MediaCenter = () => {
    const media = useSelector(selectMedia);
    const [url, setUrl ] = useState();
    useEffect( ()=>{
        console.log('Media', media)
        setUrl('/server/json.server.php?action=stream&type=song&format=mp3&auth=5a7e2ee684bf47941f9f7f5868e07ee8&id=' + media.id)
    }, [media])

    // axios.get( url ).then( (res) => {console.log(res)} )

    // const url = 'http://localhost/server/json.server.php?action=stream&id=12&type=song&auth=3546c346a29a67317fcf63f3babd8e78'
    // http://localhost/server/json.server.php?action=stream&id=12&type=song&auth=3546c346a29a67317fcf63f3babd8e78
    // http://localhost/stream.php?action=play_item&object_type=album&object_id=12
    //need to send a cookie header,, ampache=9v2oieli7l1jo26apoade0jgr4; ampache_user=admin; ampache_lang=en_US
    //the above returns a jQuery script to play
    //need to solve this or  handle it in the app.
return  <div>
   <AudioPlayer
        autoPlay
        src={url}
        onPlay={e => console.log("onPlay")}
        // other props here
    />
    {/* <ReactPlayer played="0" loaded="0" controls="true"  url={url} /> */}
    </div>
}