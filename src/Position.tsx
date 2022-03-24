import * as React from 'react';
import { useControls } from 'leva';
import { Location } from './Location';
import { useCurrentPosition } from './useCurrenPosition';
import styles from './Position.module.css';
import './App.css';
import { Label } from './LabelProps';
import { Text } from './TextProps';

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

  return (
    <details open>
      <summary>Position</summary>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formGroup}>
          <Label>Latitude</Label>
          <Text onChange={onUpdateField}>{currentPosition.latitude}</Text>
        </div>
        <div className={styles.formGroup}>
          <Label>Longitude</Label>
          <Text onChange={onUpdateField}>{currentPosition.longitude}</Text>
        </div>
        {/* <div className={styles.formActions}>
          <button className={styles.formSubmitBtn} type="submit">
            Login
          </button>
        </div> */}
      </form>
      {currentPosition.latitude && currentPosition.longitude && (
        <Location latitude={currentPosition.latitude!} longitude={currentPosition.longitude!} />
      )}
    </details>
  );
};
