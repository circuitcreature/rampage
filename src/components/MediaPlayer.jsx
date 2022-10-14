import {useState, createContext, useContext, useMemo} from "react";
import ReactPlayer from 'react-player';
import {MediaCenter} from '../hooks/useMedia';


export const MediaPlayer = () => {
    const {media} = MediaCenter();
    console.log( 'media player', media );

    return(
        <MediaCenter><ReactPlayer url='http://localhost/stream.php?action=play_item&object_type=album&object_id=11' /></MediaCenter>
    )
}

// const MediaContext = createContext();

// export const MediaPlayer = () => {
//     const [MediaObject, setMediaObject ] = useState({});
//     const url = "http://localhost/stream.php?action=play_item&object_type=album&object_id=" + MediaObject.id

//     const value = useMemo(
//         () => ({
//             MediaObject,
//         }),
//         [MediaObject]
//     );


//     return (<MediaContext.Provider value={value}></MediaContext.Provider>);
// }

// export const useMedia = () => {
//     return useContext(MediaContext)
// }
