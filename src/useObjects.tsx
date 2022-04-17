import { useState, useEffect, useCallback } from 'react';

const URL = 'https://geoservices.informatievlaanderen.be/overdrachtdiensten/GRB/wfs';

export const useObjects = ({ x, y }: { x: number; y: number }) => {
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
    const grow = 200;
    const request = 'getfeature';
    const service = 'WFS';
    const typeName = 'GRB:WBN';
    const count = 10;
    const propertyname = 'UIDN';
    const outputformat = 'json';
    const srsname = 'EPSG:31370';
    const bbox = `${x - grow},${y - grow},${x + grow},${y + grow}`;
    const query = { request, service, typeName, count, propertyname, outputformat, srsname, bbox };
    const queryString = Object.entries(query)
      .map(([key, value]) => [key, value].join('='))
      .join('&');
    const url = [URL, queryString].join('?');
    console.log(url);
    fetch(url).then(parseResponse).then(handleResponse).catch(handleError);
  }, [x, y]);

  return { data, error };
};
