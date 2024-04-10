'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState([]);
  const [languageId, setLanguageId] = useState('1');
  const [startDate, setstartDate] = useState('01-04-2024');
  const [endDate, setendDate] = useState('10-04-2024');
  const fetchData = async () => {
    try {
      const response = await fetch(
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

      console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        setData(responseData); // Set fetched data to state
        console.log(data);
      } else {
        console.error('Request failed');
      }
    } catch (error) {
      console.error('Fetch error yo:', error);
    }
  };
  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }); // Empty dependency array ensures this effect runs only once

  return <p>Customers Page</p>;
}
