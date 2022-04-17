import { FC } from 'react';
import { Json } from './Json';
import { useObjects } from './useObjects';

interface ObjectsProps {
  x: number;
  y: number;
}

export const Objects: FC<ObjectsProps> = ({ x, y }) => {
  const { data } = useObjects({ x, y });
  return <Json data={data} />;
};
