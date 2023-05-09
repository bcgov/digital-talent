type QuoteProps = {
  text: string;
};

export default function Quote({ text }: QuoteProps) {
  return (
    <div className="border-l-4 border-l-bcgov-blue-dark font-montserrat font-light my-4 pl-4 py-2 text-4xl text-bcgov-blue-dark">
      {text}
    </div>
  );
}
