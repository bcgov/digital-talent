type ParagraphProps = {
  children: string;
};

export default function Pararaph({ children }: ParagraphProps) {
  return <div className="text-base pb-2">{children}</div>;
}
