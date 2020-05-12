// to use the data from global scope import useContext

import React, {useContext, useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import NewsContents from './NewsContents'
import NewsDetailsModal from './NewsDetailsModal'
import '../App.css'
// import DataContext

import { DataContext } from '../context/Context' 
import { Typography, Paper, FormControl, FormHelperText, NativeSelect, InputLabel,TextField } from '@material-ui/core';


const  News = () =>{

    //news
    const [news, setNews] = useState([])
    const [category, setCategory] = useState('general')

    const handleChange = (e) =>{
      setCategory(e.target.value)
     
     }
     const [country, setCountry] = useState('ng')

    const handleChangeCountry = (e) =>{
      setCountry(e.target.value)
     
     }
  

   

    useEffect((e)=>{
       
            
        newsItems()
        console.log('useefect')
             

    }, [category, country])

   const newsItems = async  ()=> {
        const API_KEY= '655f4c04331e4f538f53c46a7dcf783c';
            


                const url = `http://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${API_KEY}`;
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
           
            <Grid container style={{marginTop:'10px'}}>
                <Grid item xs={12} sm={12} lg={3} style={{background:'#eee'}}>
                <FormControl>
                  
                    <NativeSelect 
                   
                    value={category}
                    onChange={handleChange}
                    
                    >   
                       
                        <option value='business'>Business</option>
                        <option value='entertainment'>entertainment</option>
                        <option value='general'>general</option>
                        <option value='health'>health</option>
                        <option value='science'>science</option>
                        <option value='sport'>sport</option>
                        <option value='technology'>technology</option>
                    </NativeSelect>
                    <FormHelperText>Category</FormHelperText>
                    
                </FormControl>
                <FormControl>
              
                    <NativeSelect 
                    
                    value={country}
                    onChange={handleChangeCountry}
                    
                    >   
                   
                        <option value='ca'>Canada</option>
                        <option value='cn'>China</option>
                        <option value='ng'>Nigeria</option>
                        <option value='uk'>United Kingdom</option>
                        <option value='us'>United State</option>
                     
                    </NativeSelect>
                    <FormHelperText>Country</FormHelperText>
                    
                </FormControl>
                   
                </Grid>
                <Grid item sm={12} lg={6}>
                    <Paper>
                        <Typography >Top News headlines from {`${country} on ${category}`}</Typography>
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

export default News;