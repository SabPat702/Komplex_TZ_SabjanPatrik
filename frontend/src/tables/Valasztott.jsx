import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Valasztott = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/agazat")
        .then(data => setData(data.data))
        .catch(err => console.log(err.json()))
    }, []);
    function AtIranyit(event){
        event.preventDefault();
        navigate()
    }
    return(
        <>
        <form action={AtIranyit()}>
            <select name="sel" id="szel">
                {data.map(row => {
                    <option value={row.agazat}>{row.agazat}</option>
                })}
            </select>
            <button onSubmit={setValue(e.target.value)}>
                Adatok
            </button>
        </form>
        </>
    )
}