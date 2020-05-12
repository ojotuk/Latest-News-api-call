// to use the data from global scope import useContext

import React, {useContext, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import NewsContents from './NewsContents'
import NewsDetailsModal from './NewsDetailsModal'
import SearchIcon from '@material-ui/icons/Search';

// import DataContext

import { DataContext } from '../context/Context' 
import { Typography, Paper, FormControl, FormHelperText, NativeSelect, InputLabel,TextField } from '@material-ui/core';


const  SearchNews = () =>{

    //news
    const [news, setNews] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('Nigeria')
    const handleChange = (e) =>{
      setSearch(e.target.value)
      //console.log(search)
      //alert('ji')
     
     }
     const handleEnter = (e) =>{
         e.preventDefault()
        setQuery(search)
      
         
         }
    //  const [country, setCountry] = useState('ng')

    // const handleChangeCountry = (e) =>{
    //   setCountry(e.target.value)
     
    //  }
  

   

    useEffect((e)=>{
       
            
        newsItems()
        console.log('useefect')
             

    }, [query])

   const newsItems = async  ()=> {
        const API_KEY= '655f4c04331e4f538f53c46a7dcf783c';
            


                const url = `http://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
                   // const req = new Request(url);
                const data = await fetch(url);
               // const response = await data;
                const jsonData = await data.json()
                setNews(jsonData.articles)
               // console.log(jsonData.articles)
        }

    
    // modal contents

    const [modalContent, setModalContent]= useState([])

    const modalItem = (item)=>{
        setModalContent(item)
    }

    const [dialogOpen, setDialogOpen] = useState(false);

    const onDialogOpen = () => {
        setDialogOpen(true);
        
        };
    const onDialogClose = () => {
        setDialogOpen(false);
       
        };

    
    const { articles } = useContext(DataContext)
    //console.log(news)
    return (
        <React.Fragment>
           
            <Grid container >
                <Grid item xs={12} sm={12} lg={3} style={{background:'#eee'}}>
                    <Typography>Search</Typography>
                    <br /><br/><hr></hr>
                <form onSubmit={handleEnter}>
                  
                    <TextField 
                    placeholder='Enter search word'
                    value={search}
                    onChange={handleChange}
                    
                    /><SearchIcon />
                    
                    
                </form>
                   
                </Grid>
                <Grid item sm={12} lg={6}>
                    <Paper>
                     <Typography >Search result from {`${query}`}</Typography>
                     {/* when mapping use =>(return value) not =>{some expression then use return (something)} */}
                     {news.map((item,i)=>{
                            const id = i + 1
                            item.id=id
                           // console.log(item)
                            return(<NewsContents key={item.id} item={item} trigger={[onDialogOpen, onDialogClose, dialogOpen]} itemModal={modalItem} />)
                     }
                        )}
                    </Paper>
                   
                </Grid>
                <Grid item sm={12} lg={3} style={{background:'#eee'}}>
                    
                </Grid>

            </Grid>
            <NewsDetailsModal item={modalContent} value={[onDialogOpen, onDialogClose, dialogOpen]}/>
         
        </React.Fragment>
    );
}

export default SearchNews;