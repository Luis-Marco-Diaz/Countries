import axios from "axios";
import { useEffect, useState } from "react";

const Country = () => {

    // El estado lo nombramos de acuerdo a lo que recibamos en la API
    const [ counrty, setCountry ] = useState({});
    
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/name/deutschland')
             .then(res => setCountry(res.data));
    }, [])

    console.log(counrty);

    return (
        <div>
            <h1>HOLA MUNDO</h1>
            <section>
                <h2>{counrty[0]?.name.common}</h2>
                
            </section>
        </div>
    );
};

export default Country;

