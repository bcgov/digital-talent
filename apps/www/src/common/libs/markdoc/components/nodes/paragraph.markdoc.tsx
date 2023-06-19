type ParagraphProps = {
  children: string;
};

export default function Pararaph({ children }: ParagraphProps) {
  return <p className="text-base m-0 py-2">{children}</p>;
}
