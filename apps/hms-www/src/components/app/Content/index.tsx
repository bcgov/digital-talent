interface ContentProps {
  children?: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  return <main style={{ flexGrow: 1, margin: '0 1em' }}>{children}</main>;
};
