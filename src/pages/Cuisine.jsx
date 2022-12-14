import React from 'react';
import styled from 'styled-components';
import motion from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Cuisine() {
   
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.reults);
    };

    useEffect(() => {
        getCuisine(params.type)
    }, [params.type])
    

  
    return
    <div>
        
    </div>
}

const Grid 

export default Cuisine;