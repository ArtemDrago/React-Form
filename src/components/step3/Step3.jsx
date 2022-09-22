import { Typography } from '@mui/material';
import React from 'react';
import FileInput from '../FileInput/FileInput';
import Form from '../form/Form';
import MainContainer from '../MainContainer/MainContainer';
import { useForm } from "react-hook-form";
import PrimaryButton from '../Button/PrimaryButton';
import { useNavigate } from "react-router-dom";
import { useData } from '../../context/DataContext';

function Step3() {
   const { data, setValues } = useData();
   const { control, handleSubmit } = useForm({
      defaultValues: {
         files: data.files,
      },
   })
   const navigate = useNavigate();

   const onSubmit = (data) => {
      setValues(data);
      navigate('/result')
   }

   return (
      <MainContainer>
         <Typography
            component="h2"
            variant="h5"
            textAlign={'center'}
            margin={'10px 0'}
         >
            🦄 Step 3
         </Typography>

         <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput
               name='files'
               control={control}
            />
            <PrimaryButton>
               Next
            </PrimaryButton>
         </Form>
      </MainContainer>
   );
}

export default Step3;