import * as React from 'react';
import { useLocation } from './useLocation';
import styles from './Position.module.css';
import './App.css';
import { Label } from './LabelProps';
import { Text } from './TextProps';
interface LocationProps {
  latitude: number;
  longitude: number;
}

export const Location: React.FC<LocationProps> = ({ latitude, longitude }) => {
  const { location } = useLocation({ latitude, longitude });
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
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <div className={styles.formGroup}>
        <Label>FormattedAddress</Label>
        <Text onChange={onUpdateField}>{location?.FormattedAddress}</Text>
      </div>
      <div className={styles.formGroup}>
        <Label>Municipality</Label>
        <Text onChange={onUpdateField}>{location?.Municipality}</Text>
      </div>
      {/* <div className={styles.formActions}>
          <button className={styles.formSubmitBtn} type="submit">
            Login
          </button>
        </div> */}
    </form>
  );
};
