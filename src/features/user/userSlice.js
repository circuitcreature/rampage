
import { current, createSlice } from '@reduxjs/toolkit'

//   {
//     "auth": "2411f3947a2e197556418387b0d0c742",
//     "api": "550001",
//     "session_expire": "2022-10-09T07:57:28+00:00",
//     "update": "2022-09-08T11:39:38+00:00",
//     "add": "2022-10-07T22:30:02+00:00",
//     "clean": "2022-10-07T22:30:02+00:00",
//     "songs": 135,
//     "albums": 15,
//     "artists": 12,
//     "genres": 2,
//     "playlists": 0,
//     "searches": 15,
//     "playlists_searches": 15,
//     "users": 2,
//     "catalogs": 1,
//     "videos": 0,
//     "podcasts": 0,
//     "podcast_episodes": 0,
//     "shares": 0,
//     "licenses": 14,
//     "live_streams": 0,
//     "labels": 0
// }

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    session: {},
    isAuthenticated: false
  },
  reducers: {
    updateSession: (state, userRes ) => {
      const newSession = {
        auth: userRes.payload.auth,
        session_expire: new Date( userRes.payload.session_expire).getTime(),
      }

      const newAuth = {
        user: userRes,
        session: newSession,
        isAuthenticated: true
      };

      return Object.assign( {}, state, newAuth )
    }
}
})

export const selectUser = (state) => state.user.user;
export const selectSession = (state) => state.user.session;
export const selectAuthenticated = (state) => state.user.isAuthenticated;

export default userSlice.reducer