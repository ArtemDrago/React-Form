import { Typography } from '@mui/material';
import React from 'react';
import { useData } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import Form from '../form/Form';
import { MyInput } from '../input/MyInput';
import MainContainer from '../MainContainer/MainContainer';
import { useForm } from "react-hook-form";
import PrimaryButton from '../Button/PrimaryButton';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
   firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required("First name is a required field"),
   lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
})

function Step1() {
   const { setValues, data } = useData();
   const navigate = useNavigate();
   const { register, handleSubmit, formState: { errors } } = useForm({
      defaultValues: { firstName: data.firstName, lastName: data.lastName },
      mode: "onBlur",
      resolver: yupResolver(schema),
   })

   const onSubmit = (data) => {
      setValues(data)
      navigate('/step2')
   }

   return (
      <MainContainer>
         <Typography
            component="h2"
            variant="h5"
            textAlign={'center'}
            margin={'10px 0'}
         >
            🦄 Step 1
         </Typography>
         <Form onSubmit={handleSubmit(onSubmit)}>
            <MyInput
               {...register('firstName')}
               id="firstName"
               type="text"
               label="First Name"
               name="firstName"
               error={!!errors.firstName}
               helperText={errors?.firstName?.message}
            />
            <MyInput
               {...register('lastName')}
               id="lastName"
               type="text"
               label="Last Name"
               name="lastName"
               error={!!errors.lastName}
               helperText={errors?.lastName?.message}
            />
            <PrimaryButton>
               Next
            </PrimaryButton>
         </Form>
      </MainContainer>
   );
}

export default Step1;