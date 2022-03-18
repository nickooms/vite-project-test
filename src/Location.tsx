import { useLocation } from './useLocation';

interface LocationProps {
  latitude: number;
  longitude: number;
}

export const Location: React.FC<LocationProps> = ({ latitude, longitude }) => {
  const { location } = useLocation({ latitude, longitude });

  return (
    <details open>
      <summary>Location</summary>
      <pre>
        <code>{JSON.stringify(location, null, 2)}</code>
      </pre>
    </details>
  );
};
