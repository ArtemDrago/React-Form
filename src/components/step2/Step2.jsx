import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import Form from '../form/Form';
import { MyInput } from '../input/MyInput';
import MainContainer from '../MainContainer/MainContainer';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../Button/PrimaryButton';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { useData } from '../../context/DataContext';

const schema = yup.object().shape({
   email: yup
      .string()
      .email("Email should have correct format")
      .required("Email is a required field"),
});

function Step2() {
   const { setValues, data } = useData();
   const navigate = useNavigate()
   const { register, handleSubmit, formState: { errors }, watch } = useForm({
      defaultValues: {
         email: data.email,
         hasPhone: data.hasPhone,
         phoneNumber: data.phoneNumber || 'No phones',
      },
      mode: 'onBlur',
      resolver: yupResolver(schema),
   })

   const hasPhone = watch("hasPhone")

   const normalizePhoneNumber = (value) => {
      const phoneNumber = parsePhoneNumberFromString(value)
      if (!phoneNumber) {
         return value
      }
      return (
         phoneNumber.formatInternational()
      )
   }

   const onSubmit = (data) => {
      navigate('/step3')
      setValues(data);
   }

   return (
      <MainContainer>
         <Typography
            component="h2"
            variant="h5"
            textAlign={'center'}
            margin={'10px 0'}
         >
            🦄 Step 2
         </Typography>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <MyInput
               {...register('email')}
               id='email'
               type='email'
               label="Email"
               name='email'
               required
               error={!!errors.email}
               helperText={errors?.email?.message}
            />
            <FormControlLabel
               control={
                  <Checkbox
                     name='hasPhone'
                     {...register('hasPhone')}
                     color='primary'
                     defaultValue={data.hasPhone}
                     defaultChecked={data.hasPhone}
                  />
               }
               label='Do you have a phone'
            />
            {
               hasPhone && (
                  <MyInput
                     {...register('phoneNumber')}
                     id='phoneNumber'
                     type='tel'
                     label='Phone number'
                     name='phoneNumber'
                     onChange={(e) => {
                        e.target.value = normalizePhoneNumber(e.target.value)
                     }}
                  />
               )
            }
            <PrimaryButton>Next</PrimaryButton>
         </Form>
      </MainContainer>
   );
}

export default Step2;