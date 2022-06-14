import * as React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height:'30%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding:'2%'
};

export default function ModalWrapper(props){
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);
        return (
            <>
              <p onClick={handleOpen}>{props.title}</p>
            <Modal
              open={open}
              onClose={handleClose}
              style={{padding:'5%'}}
            >
              <Box sx={style}>
             {props.component}
             </Box>
            </Modal></>
            )
}