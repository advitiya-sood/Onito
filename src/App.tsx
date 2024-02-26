// App.tsx
import React, { useState } from 'react';
import { Container, CssBaseline, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import Step1Form from './components/Step1Form';
import Step2Form from './components/Step2Form';
import UserList from './components/UserList';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { configureStore } from '@reduxjs/toolkit';
import { ReactQueryDevtools } from 'react-query/devtools';
import userReducer, { addUser } from './Redux/UserSlice';


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const queryClient = new QueryClient();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setActiveTab(newValue);
  };

  const store = configureStore({
    reducer: {
      users: userReducer,
    },
  });

  const handleStep1Submit = (data: any) => {
    console.log('Step 1 submitted:', data);
    setActiveTab(1);
  };

  const handleStep2Submit = (data: any) => {
    console.log('Step 2 submitted:', data);
    store.dispatch(addUser(data));
    // Handle Step 2 submission (e.g., store data in Redux)
    setActiveTab(0);
  };

  return (
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Two-Step User Registration Form
          </Typography>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Step 1" />
            <Tab label="Step 2" />
          </Tabs>
          {activeTab === 0 && <Step1Form onSubmit={handleStep1Submit} />}
          {activeTab === 1 && <Step2Form onSubmit={handleStep2Submit} />}
          <UserList />
        </Paper>
      </Container>
    </QueryClientProvider>
  </Provider>
  );
};

export default App;

   
