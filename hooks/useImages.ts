import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

const useImages = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get('https://apimocha.com/playgreen/sports')
          setData(response.data);
        } catch (error) {
           message.error('Error getting data, try again')
        } finally {
          setIsLoading(false);
        }
      };
      fetchData()
  },[]) 

  return { data,  isLoading };
};

export default useImages;