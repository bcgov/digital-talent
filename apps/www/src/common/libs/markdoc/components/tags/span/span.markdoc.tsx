type SpanProps = {
  children: string;
  className: string;
};

export default function Span({ children, className }: SpanProps) {
  return <span className={className}>{children}</span>;
}
