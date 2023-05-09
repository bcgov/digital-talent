type CardProps = {
  children?: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return <div className="w-full border border-gray-400 p-4 mb-4 rounded-md">{children}</div>;
}
