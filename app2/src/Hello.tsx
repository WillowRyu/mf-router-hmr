interface Props {
  name: string;
}

export const Hello = ({ name }: Props) => {
  return <div>Hello, im remote {name}!</div>;
};
