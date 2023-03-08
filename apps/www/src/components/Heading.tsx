interface Props {
  children?: React.ReactNode;
  className?: React.ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>['className'];
}

export function H1({ children, className }: Props & React.HTMLAttributes<'h1'>) {
  return <h1 className={`text-4xl leading-none my-4 ${className}`}>{children}</h1>;
}

export function H2({ children, className }: Props & React.HTMLAttributes<'h2'>) {
  return <h2 className={`text-3xl leading-none my-4 ${className}`}>{children}</h2>;
}

export function H3({ children, className }: Props & React.HTMLAttributes<'h3'>) {
  return <h3 className={`text-2xl leading-none my-4 ${className}`}>{children}</h3>;
}

export function H4({ children, className }: Props & React.HTMLAttributes<'h4'>) {
  return <h4 className={`text-xl leading-none my-4 ${className}`}>{children}</h4>;
}

export function H5({ children, className }: Props & React.HTMLAttributes<'h5'>) {
  return <h5 className={`text-lg leading-none my-4 ${className}`}>{children}</h5>;
}

export function H6({ children, className }: Props & React.HTMLAttributes<'h6'>) {
  return <h6 className={`text-md leading-none my-4 ${className}`}>{children}</h6>;
}
