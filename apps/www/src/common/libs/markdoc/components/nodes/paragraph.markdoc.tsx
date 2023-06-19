type ParagraphProps = {
  children: string;
};

export default function Pararaph({ children }: ParagraphProps) {
  return <div className="text-base m-0">{children}</div>;
}
