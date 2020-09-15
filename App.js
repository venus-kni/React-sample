import React, {useState} from 'react';
import BooksList from './BooksList';
import Search from './Search';

const Books =[
    {
        id:1,
        name:'Programming',
        author: 'x',
        url: 'https://www.git.ir' 
    },
    {
        id:2,
        name:'History',
        author: 'y',
        url: 'https://www.git.ir' 
    },
    {
        id:3,
        name:'Pysics',
        author: 'z',
        url: 'https://www.git.ir' 
    }
];

const App=() =>{
    


     const [searchText,setSearchText] = useState('');


     const handleSearch= event =>{
         setSearchText(event.target.value);

     }

     const filterName = Books.filter (Books => {
        return Books.name.includes(searchText) || Books.author.includes(searchText);
        
     });
 

 
    return(
    
        <div>

          <h1>List of Books</h1>

          <hr/>

            <Search onSearch={handleSearch} />

            <BooksList Books={filterName} />   

            
           
            
        </div>
    
    );
}






export default App;