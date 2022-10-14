import  React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import axios from "axios"

const [items, setItems] = useState([])
const { user } = useAuth();


const params = {
    auth: user.auth,
    action: 'albums'
}
axios.get( '/server/json.server.php', { params: params } ).then( res => {
    console.log( res )
    setItems( res.data.album )
})