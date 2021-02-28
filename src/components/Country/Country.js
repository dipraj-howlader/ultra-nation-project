import React from 'react';
import './Country.css'

const Country = (props) => {
    const {region,name, flag , population} = props.country;
       const handleAddCountry =props.handleAddCountry;
    return (
        <div className='country'>
            <img src={flag} alt=""/>
            <h4>Country name : {name}</h4>
            <p>Country Population : {population}</p>
            <p>Region : {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;