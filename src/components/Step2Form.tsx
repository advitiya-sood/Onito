// Step2Form.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TextField, Button, Grid } from '@material-ui/core';

const Step2Schema = yup.object().shape({
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string(),
  pincode: yup.string().matches(/^\d+$/, 'Invalid pincode'),
});

interface Step2FormProps {
  onSubmit: (data: any) => void;
}

const Step2Form: React.FC<Step2FormProps> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(Step2Schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField label="Address" fullWidth {...field} error={!!errors.address} helperText={errors.address?.message} />
            )}
          />
        </Grid>
        {/* Add other form fields similarly */}
      </Grid>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  );
};

export default Step2Form;
