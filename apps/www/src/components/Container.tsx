interface Props {
  children?: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
}

const Container = ({ children, className }: Props) => {
  return <div className={`container mx-auto max-w-screen-xl ${className}`}>{children}</div>;
};

export default Container;
