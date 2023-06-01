type CardProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Card({ children, className }: CardProps) {
  return <div className={`w-full border border-gray-400 p-4 mb-4 rounded-md ${className || ''}`}>{children}</div>;
}
