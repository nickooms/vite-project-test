import { Coords } from './Coords';
import { Location } from './Location';
import { usePosition } from './usePosition';

export const Position: React.FC = () => {
  const position = usePosition(true, { enableHighAccuracy: true });
  const { latitude, longitude }: Coords = position;

  return (
    <details open>
      <summary>Position</summary>
      <ul>
        <li>
          <label>Latitude</label>
          <div>{latitude}</div>
        </li>
        <li>
          <label>Longitude</label>
          <div>{longitude}</div>
        </li>
        {latitude && longitude && (
          <li>
            <label>Location</label>
            <Location latitude={latitude} longitude={longitude} />
          </li>
        )}
      </ul>
    </details>
  );
};
