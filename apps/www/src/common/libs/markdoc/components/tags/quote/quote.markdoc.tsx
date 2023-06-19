type QuoteProps = {
  children: string;
};

export default function Quote({ children }: QuoteProps) {
  return (
    <div className="border-l-4 border-l-bcgov-gold font-montserrat font-light italic my-4 pl-4 py-2 text-4xl text-gray-700">
      {children}
    </div>
  );
}
