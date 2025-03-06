import { useEffect, useState } from "react";
import axios from 'axios';

function Regi(){
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/regi")
        .then(data => {
            setData(data.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, []);
    return(
        
        <table>
        <thead>
            <th>Előzetes névsor:</th>
            <tr>
                <th>Tanuló neve</th>
                <th>Ágazat</th>
                <th>Összes pontszám</th>
            </tr>
        </thead>
        <tbody>
            {data.map(row =>{
                <tr>
                    <td>{row.nev}</td>
                    <td>{row.agazat}</td>
                    <td>{row.osszpontszam}</td>
                </tr>
            })}
        </tbody>
        </table>
        
    )
}

export default Regi