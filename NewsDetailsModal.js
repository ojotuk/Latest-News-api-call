
    
    import React, { Fragment } from 'react';
    import Button from '@material-ui/core/Button';
    import Dialog from '@material-ui/core/Dialog';
    import DialogActions from '@material-ui/core/DialogActions';
    import DialogContent from '@material-ui/core/DialogContent';
    import DialogContentText from '@material-ui/core/DialogContentText';
    import DialogTitle from '@material-ui/core/DialogTitle';
    import { Typography } from '@material-ui/core';

const NewsDetailsModal = ({value, item}) =>{

        const {onDialogOpen, onDialogClose, dialogOpen}= value
        const {author, title, description, url, id, content } = item        
               // console.log(value.value)
               // console.log(item)
        const openModal = value[2];  // equivalent of dialog open state boolean value
        const closeModal = value[1]  // equivalent of onDialogClose function
     return (
                <Fragment>
                
                    <Dialog open={openModal} onClose={closeModal}>
                        <DialogTitle>
                            Details
                            <Typography>{author}</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <Typography>{content}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={closeModal} color="primary">
                                Close
                            </Button>
                        
                        </DialogActions>
                    </Dialog>
               
                </Fragment>
            );
    }
    
export default NewsDetailsModal;

