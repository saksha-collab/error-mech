import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/apiServices';
// import React, { useEffect, useState } from 'react';
// import { fetchData } from '../services/apiService';
import { Button, Container } from '@mui/material';


const SomeComponent = ({ setError }) => {
  const [data, setData] = useState(null);

 
    const fetchValidData = async () => {
        try {
          const result = await fetchData('https://jsonplaceholder.typicode.com/posts');
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      const fetchInvalidData = async () => {
        try {
          const result = await fetchData('https://jsonplaceholder.typicode.com/invalid-endpoint');
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
          // The interceptor will handle setting the error message
        }
      };
      useEffect(() => {
        fetchValidData();
      }, []);

    
 

  return (
    <Container>
    <Button variant="contained" color="primary" onClick={fetchInvalidData}>
      Trigger API Error
    </Button>
    {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
  </Container>
  );
};

export default SomeComponent;
