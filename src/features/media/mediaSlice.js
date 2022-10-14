import { createSlice } from '@reduxjs/toolkit'

export const mediaSlice = createSlice({
  name: 'media',
  initialState: {
    mediaObj: {},
    playlist: []
  },
  reducers: {
    addPlaylist: ( state, obj ) => {
      console.log('sstore ', obj )
        // if( obj type == album )
        //might have to call api to get a list of songs.
        state.playlist.push( obj.payload )
    },
    playNow: ( state, obj ) => {
console.log('sstore ', obj )
      //might have to cleanup the state obj first
      // return ( ...state, {mediaObj: obj.payload} )
      return Object.assign( {}, state, { mediaObj: obj.payload.album} )
      // return {
      //   ...state,
      //   obj.payload
      // }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addPlaylist, playNow } = mediaSlice.actions

export const selectMedia = (state) => state.media.mediaObj;

export default mediaSlice.reducer
