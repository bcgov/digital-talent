interface HeroProps {
  title?: string;
}

export default function Hero({ title }: HeroProps) {
  return title ? (
    <div className="bg-bcgov-blue-dark font-bold text-6xl text-white py-12 w-full">
      <div className="container mx-auto">{title}</div>
    </div>
  ) : (
    <div />
  );
}
