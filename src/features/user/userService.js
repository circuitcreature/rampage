import sha256 from "crypto-js/sha256"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'

const keyName = 'ampache-session';

function saveLocalStorage( state, data ){
  try {
    window.localStorage.setItem(keyName, JSON.stringify(data.payload));
  } catch (err) {
    return;
  }
}

function getLocalStorage(){

  try {
    const value = window.localStorage.getItem(keyName);

    if (value) {
      return JSON.parse(value);
    }

  } catch (err) {
    return;
  }
}

export function logout(){
  localStorage.removeItem(keyName);
}

export function ping( dispatch, getState ){
  let auth = '';

  if( getState().user.session.hasOwnProperty('auth') ){
    auth = getState().user.session.auth;
  }else{
    const session = getLocalStorage()
    if( session ){
      auth = session.auth;
    }
  }

  const params = {
      action: 'ping',
      auth: auth
  }

  axios.get( '/server/json.server.php', {params: params} )
    .then( res => res.data )
    .then( (data) => {
      if( data.hasOwnProperty('auth') ){
        dispatch({ type: 'user/updateSession', payload: data })
      }
    })
}

export function login( data ) {
  return async function( dispatch, getState ){

        const hash = sha256( data.password )
        const d = new Date();
        let time = d.getTime() / 1000;
        time = time<<0

        const passphrase = sha256( time + hash.toString() )

        const params = {
          action: 'handshake',
          user: data.user,
          auth: passphrase.toString(),
          timestamp: time,
          version: '500000'
        }

        axios.get( '/server/json.server.php', {params: params} ).then( res => {

          //look up the the remember is the API

          if( res.data.hasOwnProperty('error') ){
            return;
          }
          if( res.status === 200 && res.data.hasOwnProperty('auth') ){
            dispatch({ type: 'user/updateSession', payload: res.data })
            saveLocalStorage( res.data )
          }
        })
  }
}