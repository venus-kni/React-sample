import React from 'react'


const BooksList = ({Books})=>{    
    
    return Books.map(Books => {
            return (
                <div  key= {Books.id}>
                    <span>
                        <a href={Books.url}><strong>{Books.name}</strong></a>
                    </span>
                    <span>| {Books.id}</span>
                    <span>| {Books.author}</span>
                
                <br/> 
            
                </div>

            );  
        });
 }

 export default BooksList;