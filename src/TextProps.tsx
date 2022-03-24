import * as React from 'react';
import styles from './Position.module.css';

interface TextProps extends React.HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}
export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <input
    className={styles.formField}
    type="text"
    aria-label="Latitude field"
    name="latitude"
    value={String(children)}
    {...props}
  />
);
