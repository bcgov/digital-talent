interface Props {
  children?: React.ReactNode;
  className?: React.ComponentProps<'div'>['className'];
}

export default function Container({ children, className }: Props) {
  return <div className={`container mx-auto px-4 max-w-screen-xl ${className}`}>{children}</div>;
}
