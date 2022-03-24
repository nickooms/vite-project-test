import * as React from 'react';
import { useControls } from 'leva';
import { Location } from './Location';
import { useCurrentPosition } from './useCurrenPosition';
import styles from './Position.module.css';

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

  const onUpdateField = (e: React.FormEvent<HTMLInputElement>) => {
    const nextFormState = {
      ...form,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <details open>
      <summary>Position</summary>
      <form className={styles.form} onSubmit={onSubmitForm}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input
            className={styles.formField}
            type="text"
            aria-label="Email field"
            name="email"
            value={form.email}
            onChange={onUpdateField}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Password</label>
          <input
            className={styles.formField}
            type="password"
            aria-label="Password field"
            name="password"
            value={form.password}
            onChange={onUpdateField}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Confirm Password</label>
          <input
            className={styles.formField}
            type="password"
            aria-label="Confirm password field"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={onUpdateField}
          />
        </div>
        <div className={styles.formActions}>
          <button className={styles.formSubmitBtn} type="submit">
            Login
          </button>
        </div>
      </form>
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
