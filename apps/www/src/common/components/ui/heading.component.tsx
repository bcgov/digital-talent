/* eslint-disable @typescript-eslint/no-unused-vars */

import { cn } from '../../utils/cn.util';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type HeadingProps = {
  id?: string;
  children: string;
  level: number;
  variant?: 'markdoc-heading' | 'section-heading' | 'bc-gov';
} & React.HTMLAttributes<HTMLDivElement>;

export default function Heading({ id, children, className, level, variant }: HeadingProps) {
  switch (level) {
    case 1:
      return (
        <>
          {id && <div className="block relative -top-20" id={id} />}
          <h1
            className={cn(
              `mt-0`,
              variant === 'markdoc-heading' ? 'text-3xl mb-1 mt-5' : 'text-6xl',
              `font-bold`,
              variant === 'section-heading' ? 'text-bcgov-blue-dark' : 'text-black',
              variant === 'bc-gov'? 'text-bcgov-blue-dark' : '',
              className && className,
            )}
          >
            {children}
          </h1>
          {variant === 'section-heading' && <hr className="bg-bcgov-blue-dark h-2 w-16 mt-4 mb-8" />}
        </>
      );
    case 2:
      return (
        <>
          {id && <div className="block relative -top-20" id={id} />}
          <h2
            className={cn(
              `mt-0`,
              variant === 'markdoc-heading' ? 'text-2xl mb-1 mt-5' : 'text-[2.6rem]',
              `font-bold`,
              variant === 'section-heading' ? 'text-bcgov-blue-dark' : 'text-black',
              className && className,
            )}
          >
            {children}
          </h2>
        </>
      );
    case 3:
      return (
        <>
          {id && <div className="block relative -top-20" id={id} />}
          <h3
            className={cn(
              `mt-0`,
              variant === 'markdoc-heading' ? 'text-xl' : 'text-[1.8rem]',
              `font-bold`,
              variant === 'section-heading' ? 'text-bcgov-blue-dark' : 'text-black',
              className && className,
            )}
          >
            {children}
          </h3>
        </>
      );
    case 4:
      return (
        <>
          {id && <div className="block relative -top-20" id={id} />}
          <h4
            className={cn(
              `mt-0`,
              variant === 'markdoc-heading' ? 'text-lg' : 'text-3xl',
              `font-semibold`,
              variant === 'section-heading' ? 'text-bcgov-blue-dark' : 'text-black',
              className && className,
            )}
          >
            {children}
          </h4>
        </>
      );
    case 5:
      return (
        <>
          {id && <div className="block relative -top-20" id={id} />}
          <h5
            className={`mt-0 text-2xl font-semibold${
              variant === 'section-heading' ? 'text-bcgov-blue-dark' : 'text-black'
            } ${className || ''}`}
          >
            {children}
          </h5>
        </>
      );
    case 6:
      return (
        <>
          {id && <div className="block relative -top-20" id={id} />}
          <h6
            className={`mt-0 text-xl font-semibold${
              variant === 'section-heading' ? 'text-bcgov-blue-dark' : 'text-black'
            } ${className || ''}`}
          >
            {children}
          </h6>
        </>
      );
    default:
      return (
        <>
          {id && <div className="block relative -top-20" id={id} />}
          <div
            className={`text-base font-semidbold${
              variant === 'section-heading' ? 'text-bcgov-blue-dark' : 'text-black'
            } ${className || ''}`}
          >
            {children}
          </div>
        </>
      );
  }
}
