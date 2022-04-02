import * as React from 'react';
import { useLocation } from './useLocation';
import styles from './Position.module.css';
import './App.css';
import { TextFieldProps, TextFieldFactory } from './TextFieldProps';

interface LocationProps {
  latitude: number;
  longitude: number;
}

export const Location: React.FC<LocationProps> = ({ latitude, longitude }) => {
  const { location } = useLocation({ latitude, longitude });

  const [form, setForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onUpdateField: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const nextFormState = {
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  const TextField: React.FC<TextFieldProps> = TextFieldFactory(onUpdateField);

  console.log(location);

  return (
    <details open>
      <summary>Location</summary>
      {location && (
        <form className={styles.form} onSubmit={onSubmitForm}>
          <TextField label="Formatted Address">{location.FormattedAddress}</TextField>
          <TextField label="Municipality">{location.Municipality}</TextField>
          <TextField label="Zipcode">{location.Zipcode}</TextField>
          <TextField label="Thoroughfarename">{location.Thoroughfarename}</TextField>
          <TextField label="Housenumber">{location.Housenumber}</TextField>
          <TextField label="ID">{location.ID}</TextField>
          {/* <TextField label="Lower Left Latitude">{location.BoundingBox.LowerLeft.Lat_WGS84}</TextField>
          <TextField label="Lower Left Longitude">{location.BoundingBox.LowerLeft.Lon_WGS84}</TextField>
          <TextField label="Upper Right Latitude">{location.BoundingBox.UpperRight.Lat_WGS84}</TextField>
          <TextField label="Upper Right Longitude">{location.BoundingBox.UpperRight.Lon_WGS84}</TextField> */}
        </form>
      )}
    </details>
  );
};
