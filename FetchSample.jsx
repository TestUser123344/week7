import {useState, useEffect} from 'react';

export default function App () {
  const [data, setData] = useState(null);
  
  const API_HEADERS = {
  'X-Master-Key': ''
};

  useEffect(() => {
    async function fetchData() {

      //try {

    const res = await fetch('https://api.jsonbin.io/v3/b/', { headers: API_HEADERS });

        const json = await res.json();

        setData(json);
          //} catch (error) {
          //  console.error('error!', error);

      //}
    }
    fetchData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>


}
