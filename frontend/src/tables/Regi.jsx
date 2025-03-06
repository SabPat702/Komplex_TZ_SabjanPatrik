import { useEffect, useState } from "react";
import axios from 'axios';

export const Regi = () => {
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
        <>
        <table>
        <thead>
            <th scope="col ">Előzetes névsor:</th>
            <tr>
                <th scope="col ">Tanuló neve</th>
                <th scope="col ">Ágazat</th>
                <th scope="col ">Összes pontszám</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row) =>{
                <tr>
                    <td>{row.nev}</td>
                    <td>{row.agazat}</td>
                    <td>{row.osszpontszam}</td>
                </tr>
            })}
        </tbody>
        </table>
        </>
    )
}