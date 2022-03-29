import React from 'react';
import { useNavigate } from 'react-router-dom';



const DelMeal = ({meal}) => {
    const{strMeal, strMealThumb, strInstructions, strYoutube} = meal;
    const navigate = useNavigate()

    const goHome = () => {
        const path = `/home`
        navigate(path)
    }
    return (
        <div className='bg-black text-white container mx-auto p-4'>
            <h1>name:{strMeal}</h1>
            <img  className='mx-auto my-4' src={strMealThumb} alt="" />
            <p>{strInstructions.slice(0, 500)}<a className='text-blue-500 underline' href={strYoutube}>go to youtube</a></p>
            <button className='mt-4 bg-orange-400 px-6 py-2 rounded-full' onClick={goHome}>go home</button>
        </div>
    );
};

export default DelMeal;