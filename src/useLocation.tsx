// http://loc.geopunt.be/v4/location?latlon=51.306532,4.4054908
const URL = 'http://loc.geopunt.be/v4/location';

import { useState, useEffect } from 'react';

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
