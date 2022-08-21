import { useEffect, useState } from "react";
 import * as axios from 'axios'

export const Main = () => {
  const [data,setData] = useState()
  useEffect(() => {
       axios.get('http://127.0.0.1:3000/user').then(res=>{
              console.log(res.data);
              setData(res.data)
            })
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};
