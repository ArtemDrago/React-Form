import InsertDriveFile from '@mui/icons-material/InsertDriveFile';
import { useNavigate } from "react-router-dom";
import {
   TableContainer, Typography,
   Paper, Table, TableHead,
   TableBody, TableRow, TableCell,
   List, ListItem, ListItemIcon,
   ListItemText,
   Button
} from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import PrimaryButton from '../Button/PrimaryButton';
import MainContainer from '../MainContainer/MainContainer';
import './style.css'
import Confetti from 'react-confetti'
import Swal from "sweetalert2";

function Result() {
   const [success, setSuccess] = useState(false);
   const { data } = useData()
   const entries = Object.entries(data).filter((entry) => entry[0] !== 'files' && entry[0] !== 'hasPhone')
   const { files } = data;
   const navigate = useNavigate()

   const onSubmit = () => {

      const formData = new FormData();
      if (data.files) {
         data.files.forEach((file) => {
            formData.append("files", file, file.name);
         });
      }
      entries.forEach((entry) => {
         formData.append(entry[0], entry[1]);
      });

      //you need to create a server!!///////////////////////////////////////////////////////////////

      // const res = await fetch("http://localhost:4000/", {
      //   method: "POST",
      //   body: formData,
      // });

      // if (res.status === 200) {
      //   Swal.fire("Great job!", "You've passed the challenge!", "success");
      //   setSuccess(true);
      // }

      Swal.fire("Great job!", "You've passed the challenge!", "success");
      setSuccess(true);
      setTimeout(() => {
         setSuccess(false);
         navigate('/')
      }, 5000)
   }

   if (success) {
      return <Confetti />;
   }

   return (
      <MainContainer className='result'>
         <Typography
            component="h2"
            variant="h5"
            textAlign={'center'}
            margin={'10px 0'}
         >
            📋 Form Values
         </Typography>
         <TableContainer component={Paper} className='table'>
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>
                        Fild
                     </TableCell>
                     <TableCell align='right'>
                        Value
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {entries.map((entry) => (
                     <TableRow key={entry[0]}>
                        <TableCell component="th" scope="row">
                           {entry[0]}
                        </TableCell>
                        <TableCell
                           align="right"
                        >
                           {entry[1]}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         {files &&
            <>
               <Typography
                  component="h2"
                  variant="h5"
                  textAlign={'center'}
                  margin={'10px 0'}
               >
                  📦 Files
               </Typography>
               <List>
                  {files.map((f, index) => (
                     <ListItem key={index}>
                        <ListItemIcon>
                           <InsertDriveFile />
                        </ListItemIcon>
                        <ListItemText primary={f.name} secondary={f.size} />
                     </ListItem>
                  ))}
               </List>
            </>
         }
         <Button
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
            onClick={onSubmit}
         >
            Submit
         </Button>
         <Link className='link' to={'/'}>
            Start over
         </Link>
      </MainContainer>
   );
}

export default Result;