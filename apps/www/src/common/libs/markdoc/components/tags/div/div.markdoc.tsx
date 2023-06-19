type DivProps = {
  children: string;
  className: string;
};

export default function Div({ children, className }: DivProps) {
  return <div className={className}>{children}</div>;
}
