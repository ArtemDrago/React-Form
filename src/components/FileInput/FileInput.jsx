import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import Dropzone from "react-dropzone";
import CloudUpload from "@mui/icons-material/CloudUpload";
import InsertDriveFile from "@mui/icons-material/InsertDriveFile";
import './style.css'


function FileInput({ control, name }) {
   return (
      <Controller
         control={control}
         name={name}
         defaultValue={[]}
         render={({ field: { onBlur, onChange, value } }) =>
            <>
               <Dropzone
                  onDrop={onChange}
               >
                  {({ getRootProps, getInputProps }) => (
                     <Paper
                        className='dropzone'
                        variant='outlined'
                        {...getRootProps()}
                     >
                        <CloudUpload
                           className='icon'
                           style={{ fontSize: '40px' }}
                        />
                        <input
                           {...getInputProps()}
                           name={name}
                           onBlur={onBlur}
                        />
                        <p>
                           Drag 'n' drop files here, or click to select files
                        </p>
                     </Paper>)
                  }
               </Dropzone>

               <List>
                  {value && value.map((f, index) => (
                     <ListItem key={index}>
                        <ListItemIcon>
                           <InsertDriveFile />
                        </ListItemIcon>
                        <ListItemText primary={f.path} secondary={f.size} />
                        <div className='file-box'>
                           <img
                              src={f ? URL.createObjectURL(f) : ''}
                              className='file'
                           />
                        </div>
                     </ListItem>
                  ))}

               </List>
            </>}
      />
   );
}

export default FileInput;