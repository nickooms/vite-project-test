import { FC } from 'react';

interface JsonProps {
  data: Object;
}
export const Json: FC<JsonProps> = (props) => (
  <pre>
    <code>{JSON.stringify(props.data)}</code>
  </pre>
);
