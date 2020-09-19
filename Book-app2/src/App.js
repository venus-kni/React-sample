import React, {useState, useEffect} from 'react';
import BooksList from './BooksList';
import Search from './Search/Search.js';
import ShowTime from './Time/ShowTime.js';



const Books_data =[
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
    

     const [books, setBooks]= useState([]);
     const [isLoading, setIsLoading]= useState(false);
     const [searchText,setSearchText] = useState(
         
       localStorage.getItem('searchText') ||''
        
        );


     const handleSearch= event =>{
         setSearchText(event.target.value);
        // localStorage.setItem('searchText', event.target.value);

     }

     //Retrive data from BooK_data array and syncronize in 2 sec, (resolving after 2 second)  
     const getBooksAsync =() =>
         new Promise( resolve => 
            setTimeout(
                ()=> resolve({books:Books_data}),
                3000
                )
            
            );

        
    useEffect(() => {
        setIsLoading(true);
        getBooksAsync().then( result => {
            setBooks(result.books); //updated setbooks
            setIsLoading(false);
        } )
       }, [] );     

   
    useEffect(() => {

        localStorage.setItem('searchText', searchText)
      }, []);
      //[searchText]
         
     

     const filterName = Books_data.filter (Books_data => {
        return Books_data.name.includes(searchText) || Books_data.author.includes(searchText);
        
     });
 

 
    return(
    
        <div>
            <ShowTime />

          <h1>List of Books</h1>
         
          <hr/>
           
             

            <Search value={searchText} onSearch={handleSearch} />

            {/*conditional rendering*/}

            { isLoading ? (

                <p>THE LIST IS LOADING...</p>

            ): (

                <BooksList Books={filterName} />   

            )}

            
            
           
            
        </div>
    
    );
}






export default App;