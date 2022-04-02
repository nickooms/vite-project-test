import * as React from 'react';
import { useControls } from 'leva';
import { Location } from './Location';
import { useCurrentPosition } from './useCurrenPosition';
import styles from './Position.module.css';
import './App.css';
// import { Label } from './LabelProps';
// import { Text } from './TextProps';
import { TextFieldProps, TextFieldFactory } from './TextFieldProps';

export const Position = () => {
  const currentPosition = useCurrentPosition(true, { enableHighAccuracy: true });
  const [
    {
      Position: [latitude, longitude],
    },
  ] = useControls(() => ({
    Position: [currentPosition.latitude || 0, currentPosition.longitude || 0],
  }));

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

  return (
    <>
      <details open>
        <summary>Position</summary>
        <form className={styles.form} onSubmit={onSubmitForm}>
          <TextField label="Latitude">{currentPosition.latitude}</TextField>
          <TextField label="Longitude">{currentPosition.longitude}</TextField>
          {/* <div className={styles.formGroup}>
            <Label>Latitude</Label>
            <Text onChange={onUpdateField}>{currentPosition.latitude}</Text>
          </div>
          <div className={styles.formGroup}>
            <Label>Longitude</Label>
            <Text onChange={onUpdateField}>{currentPosition.longitude}</Text>
          </div> */}
        </form>
      </details>
      {currentPosition.latitude && currentPosition.longitude && (
        <Location latitude={currentPosition.latitude!} longitude={currentPosition.longitude!} />
      )}
    </>
  );
};
