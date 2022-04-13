import { FC, useState, useEffect, useCallback } from 'react';

interface JsonProps {
  data: Object;
}

interface ObjectsProps {
  latitude: number;
  longitude: number;
}

const URL =
  'https://geoservices.informatievlaanderen.be/overdrachtdiensten/GRB/wfs?request=getfeature&service=WFS&typeName=GRB:WBN&count=10&propertyname=UIDN&outputformat=json';

export const useObjects = ({ latitude, longitude }: { latitude: number; longitude: number }) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const parseResponse = useCallback((response: Response): Promise<any> => response.json(), []);

  const handleResponse = useCallback((d: any): void => {
    setData(d);
  }, []);

  const handleError = useCallback((reason: any): void => {
    console.error(reason);
    setError(reason);
  }, []);

  useEffect(() => {
    const url = `${URL}&bbox=${latitude - 0.01},${longitude - 0.01},${latitude + 0.01},${longitude + 0.01}`;
    fetch(url).then(parseResponse).then(handleResponse).catch(handleError);
  }, [latitude, longitude]);

  return { data, error };
};

const Json: FC<JsonProps> = (props) => (
  <pre>
    <code>{JSON.stringify(props.data)}</code>
  </pre>
);

export const Objects: FC<ObjectsProps> = ({ latitude, longitude }) => {
  const { data } = useObjects({ latitude, longitude });
  return <Json data={data} />;
};

// import { useState, useEffect, useCallback } from 'react';
// import { Housenumber } from './Housenumber';

// const URL = 'https://loc.geopunt.be/v4/location';

// interface LocationResponse {
//   LocationResult: Housenumber[];
// }
