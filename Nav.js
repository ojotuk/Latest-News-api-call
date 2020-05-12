import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';

 const Nav= (props)=> {
     const [tab, setTab] = useState()
     const tabChange = (e, currentTab) =>{
         setTab(currentTab)
     }
     const topTab = ()=>{
         setTab(0)
     }
     const searchTab = ()=>{
        setTab(1)
    }
    return (
        <div>
            <AppBar position= 'static' >
                <ToolBar>
                    <Typography variant='inherit'>
                    Latest News {props.user}
                    </Typography>
                    {/* <Typography variant='inherit' style={{marginLeft:'9px'}}> */}
                        <TwitterIcon style={{marginLeft:'9px'}}>
                            </TwitterIcon>@iam_kazym
                    {/* </Typography> */}
                    <Tabs  value ={tab} centered onChange={tabChange} indicatorColor='secondary'>
                            <Link to='./' style={{textDecoration:'none', color:'white'}} onClick={topTab}>
                                <Tab label='Top News' />
                                
                              
                            </Link>
                            
                            <Link to='./SearchNews' style={{textDecoration:'none', color:'white'}} onClick={searchTab}>
                                <Tab label='Search News' >
                                

                            
                                </Tab>
                            </Link>
                            

                        
                        
                    </Tabs>
                    
                </ToolBar>
            </AppBar>
            
        </div>
    );
}

export default Nav;