'use client';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

export default function Page() {
  const [data, setData] = useState([]);
  const [languageId, setLanguageId] = useState('1');
  const [startDate, setstartDate] = useState('01-04-2024');
  const [endDate, setendDate] = useState('10-04-2024');
  const HTTPS_GETSEARCH_API_LINK =
    'https://archive.pib.gov.in/apipib/api/Getsearch';
  const BEARER_TOKEN =
    '15dpV1NVTyHXVmZeo3uFSaA13570Qu9mpUj5N6SxAGTiGBE78Lw9XKfyNSwh1JFeYdeZh-ywsQsfmxK7FIynzp5bL13ug8rP4GydsOQgs-a-iMrYNuCYQkpoVof_FP2QFypnflJX9avcbS-AWegigLhXVwDErejKN6tctWjsD2omBF9JzocUMT5biA3YutTUdcflW9wYWYfBzlOV5erA1Lks6YlovOYkGRdQJzHHlpB5mGoXXE6Mr2fTW-93AOmeKsfEUWL29ziY7Yy30h37oCL-UAtMNOgr5NOGQ2A28mM';
  const fetchData = async () => {
    interface RequestData {
      langid: number;
      startDate: string;
      endDate: string;
    }

    interface ResponseData {
      Message: string;
      id: string;
      langid: string;
      title: string;
      keyword: string;
      url: string;
      description: string;
      startDate: string;
      endDate: string;
      ministry_id: string;
      release_date: string;
      publish_date: string;
    }

    // Example data to be sent in the request
    const requestData: RequestData = {
      langid: 1,
      startDate: '01-04-2024',
      endDate: '10-04-2024',
    };

    // Making the POST request
    axios
      .post<ResponseData>(HTTPS_GETSEARCH_API_LINK, requestData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      })
      .then((response: AxiosResponse<ResponseData>) => {
        console.log(response.data);
      })
      .catch((error: AxiosError) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
        }
      });
  };
  fetchData();

  /*   const fetchData = async () => {
    try {
      const response = await axios.post(
        'https://archive.pib.gov.in/apipib/api/Getsearch',
        {
          langid: 1,
          startDate:  '01-04-2024',
          endDate:    '10-04-2024',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 15dpV1NVTyHXVmZeo3uFSaA13570Qu9mpUj5N6SxAGTiGBE78Lw9XKfyNSwh1JFeYdeZh-ywsQsfmxK7FIynzp5bL13ug8rP4GydsOQgs-a-iMrYNuCYQkpoVof_FP2QFypnflJX9avcbS-AWegigLhXVwDErejKN6tctWjsD2omBF9JzocUMT5biA3YutTUdcflW9wYWYfBzlOV5erA1Lks6YlovOYkGRdQJzHHlpB5mGoXXE6Mr2fTW-93AOmeKsfEUWL29ziY7Yy30h37oCL-UAtMNOgr5NOGQ2A28mM',
          },
        },
      );
      /* const response = await Axios.post(
        'https://archive.pib.gov.in/apipib/api/Getsearch',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 15dpV1NVTyHXVmZeo3uFSaA13570Qu9mpUj5N6SxAGTiGBE78Lw9XKfyNSwh1JFeYdeZh-ywsQsfmxK7FIynzp5bL13ug8rP4GydsOQgs-a-iMrYNuCYQkpoVof_FP2QFypnflJX9avcbS-AWegigLhXVwDErejKN6tctWjsD2omBF9JzocUMT5biA3YutTUdcflW9wYWYfBzlOV5erA1Lks6YlovOYkGRdQJzHHlpB5mGoXXE6Mr2fTW-93AOmeKsfEUWL29ziY7Yy30h37oCL-UAtMNOgr5NOGQ2A28mM',
          },
          body: JSON.stringify({
            langid: 1,
            startDate: '01-04-2024',
            endDate: '10-04-2024',
          }),
        },
      ); 

      if (response.status === 200) {
        console.log(response);
/*         const responseData = await response.json();
        setData(responseData); // Set fetched data to state
        console.log(data); 
      } else {
        console.error('Request failed');
      }
    } catch (error) {
      console.error('Fetch error yo:', error);
    }
  }; */
  /* useEffect(() => {
    fetchData(); // Fetch data when component mounts
  });  */ // Empty dependency array ensures this effect runs only once

  return <p>Customers Page</p>;
}
