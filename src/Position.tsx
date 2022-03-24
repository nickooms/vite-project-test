import { useControls } from 'leva';
import { Coords } from './Coords';
import { Location } from './Location';
import { useCurrentPosition } from './useCurrenPosition';

export const Position = () => {
  const currentPosition = useCurrentPosition(true, { enableHighAccuracy: true });
  const [
    {
      Position: [latitude, longitude],
    },
  ] = useControls(() => ({
    Position: [currentPosition.latitude || 0, currentPosition.longitude || 0],
  }));

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
            <Location latitude={currentPosition.latitude!} longitude={currentPosition.longitude!} />
          </li>
        )}
      </ul>
    </details>
  );
};
