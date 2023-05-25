import axios from "axios";
import { useEffect, useState } from "react";

export default function ListUser() {

    const [users, setUsers] = useState({});
    useEffect(() =>{
        getUsers();
    }, []);
    function getUsers(){
    axios.post('http://localhost:8080/api/user/save').then(function(response){
            console.log(response.data);
        });
    }
    return(
        <h1>list user </h1>
    )
}