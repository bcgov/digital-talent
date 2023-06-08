import { cn } from '../../../utils/cn.util';

export type HeroVariant = 'dark' | 'light';

interface HeroProps {
  variant: HeroVariant;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Hero({ variant, title, description, children }: HeroProps) {
  return (
    <div className={cn(variant === 'dark' ? 'bg-bcgov-blue-dark' : 'bg-transparent', 'py-12 w-full')}>
      <div className="container flex flex-col gap-4 mx-auto">
        <h1 className={cn(variant === 'dark' ? 'text-white' : 'text-bcgov-blue-dark', 'font-bold text-6xl')}>
          {title}
        </h1>
        {description && (
          <span className={cn(variant === 'dark' ? 'text-gray-200' : 'text-gray-800', 'font-normal text-xl')}>
            {description}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}
