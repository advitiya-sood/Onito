// Step1Form.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Grid } from '@material-ui/core';

const Step1Schema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  age: yup.number().positive('Age must be a positive integer').required('Age is required'),
  sex: yup.string().oneOf(['Male', 'Female']).required('Sex is required'),
  mobile: yup.string().matches(/^[6-9]\d{9}$/, 'Invalid mobile number').required('Mobile is required'),
  govtIdType: yup.string().oneOf(['Aadhar', 'PAN']).required('ID Type is required'),
//   govtId: yup.string().when('govtIdType', {
//     is: 'Aadhar',
//     then: yup.string().matches(/^[2-9]\d{11}$/, 'Invalid Aadhar number').required('Aadhar is required'),
//     otherwise: yup.string().matches(/^[A-Za-z0-9]{10}$/, 'Invalid PAN number').required('PAN is required'),
//   }),
});

interface Step1FormProps {
  onSubmit: (data: any) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(Step1Schema),
  });


  const handlesubmitFunc=(event: any)=>{
    event.preventDefault()
    console.log("handle submit",event.target.value)
    
  }

  return (
    <form onSubmit={handlesubmitFunc}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField label="name" fullWidth {...field} error={!!errors.name} helperText={errors.name?.message} />
            )}
          />
        </Grid>
        {/* Add other form fields similarly */}
      </Grid>
      <Button type="submit" variant="contained" color="primary">Next</Button>
    </form>
  );
};

export default Step1Form;
