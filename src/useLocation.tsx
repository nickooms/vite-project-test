import { useState, useEffect } from 'react';

const URL = 'https://loc.geopunt.be/v4/location';

export const useLocation = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const url: string = `${URL}?latlon=${latitude},${longitude}`;

    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        setLocation(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [latitude, longitude]);

  return { location };
};
