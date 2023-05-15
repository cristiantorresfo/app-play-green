import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";

export interface Data {
    sports: Sport[];
}

export interface Sport {
    idSport:             string;
    strSport:            string;
    strFormat:           StrFormat;
    strSportThumb:       string;
    strSportIconGreen:   string;
    strSportDescription: string;
}

export enum StrFormat {
    EventSport = "EventSport",
    TeamvsTeam = "TeamvsTeam",
}


const useImages = () => {
  const [data, setData] = useState<Data>();
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