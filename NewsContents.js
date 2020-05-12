import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContents from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';

const NewsContents = ({item, trigger, itemModal}) => {
    const {author, title, description, urlToImage, id } = item
    //console.log(item)
    const openDialogWindow =trigger[0]  //this is the equivalent of the function onOpenDialog()

   // const {onDialogOpen, onDialogClose, dialogOpen} = trigger

    return (
        <div>
            <Typography></Typography>
            <Paper style={{ alignContent:'center', justifyContent:'center', marginBottom:'10px'}}>
                <Card>
                    <CardHeader title={title} subheader={author} />
                    <CardContents>
                        <Avatar src={urlToImage}></Avatar>
                    </CardContents>
                    <CardActions>
                        <Button color='primary' onClick={function(){
                             openDialogWindow()
                             itemModal(item)
                             return  console.log('details generated to modal') }
                        }>details</Button>
                        
                    </CardActions>

                </Card>
            </Paper>
           
        </div>
    );
}

export default NewsContents;