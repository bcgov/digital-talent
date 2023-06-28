import Heading from '../heading.component';

interface HeroProps {
  children?: React.ReactNode;
  description?: string;
  title: string;
  variant?: 'section-heading';
}

export default function Hero({ variant, title, description, children }: HeroProps) {
  return (
    <div className="mt-8 mb-4 w-full">
      <div className="container flex flex-col gap-4 mx-auto">
        <Heading level={1} variant={variant}>
          {title}
        </Heading>
        {description && <span className="text-gray-800 font-normal text-xl mt-2 mb-12">{description}</span>}
        {children}
      </div>
    </div>
  );
}
