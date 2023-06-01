/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
type HeadingProps = {
  id?: string;
  children: string;
  level: number;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Heading({ id, children, className, level }: HeadingProps) {
  switch (level) {
    case 1:
      return (
        <>
          {id && <div className="block relative -top-16" id={id} />}
          <h1 className={`mt-0 text-3xl font-semibold ${className || ''}`}>{children}</h1>
        </>
      );
    case 2:
      return (
        <>
          {id && <div className="block relative -top-16" id={id} />}
          <h2 className={`mt-0 text-2xl font-semibold ${className || ''}`}>{children}</h2>
        </>
      );
    case 3:
      return (
        <>
          {id && <div className="block relative -top-16" id={id} />}
          <h3 className={`mt-0 text-xl font-semibold ${className || ''}`}>{children}</h3>
        </>
      );
    case 4:
      return (
        <>
          {id && <div className="block relative -top-16" id={id} />}
          <h4 className={`mt-0 text-lg font-semibold ${className || ''}`}>{children}</h4>
        </>
      );
    case 5:
      return (
        <>
          {id && <div className="block relative -top-16" id={id} />}
          <h5 className={`mt-0 text-base font-semibold ${className || ''}`}>{children}</h5>
        </>
      );
    case 6:
      return (
        <>
          {id && <div className="block relative -top-16" id={id} />}
          <h6 className={`mt-0 text-sm font-semibold ${className || ''}`}>{children}</h6>
        </>
      );
    default:
      return (
        <>
          {id && <div className="block relative -top-16" id={id} />}
          <div className={`text-base font-semidbold ${className || ''}`}>{children}</div>
        </>
      );
  }
}
