import * as React from 'react';
import styles from './Position.module.css';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}
export const Label: React.FC<LabelProps> = ({ children }) => <label className={styles.formLabel}>{children}</label>;
