import React,{useState,useEffect} from 'react';

const ShowTime = () =>{
    const [value,setValue]=  useState (new Date().toLocaleTimeString());

    useEffect(()=>{
        updateValue();
    }, []);


const updateValue =()=>{

    setTimeout(() => {
        setValue(new Date().toLocaleTimeString());
        updateValue();
    }, 1000);

};

return <div>{value}</div>;
};
export default ShowTime;
