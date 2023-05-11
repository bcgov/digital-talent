/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
type HeadingProps = {
  id?: string;
  children: string;
  level: number;
};

export default function Heading({ id, children, level }: any) {
  switch (level) {
    case 1:
      return (
        <h1 className="mt-0 text-3xl font-semibold" {...(id && { id })}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 className="mt-0 text-2xl font-semibold" {...(id && { id })}>
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 className="mt-0 text-xl font-semibold" {...(id && { id })}>
          {children}
        </h3>
      );
    case 4:
      return (
        <h4 className="mt-0 text-lg font-semibold" {...(id && { id })}>
          {children}
        </h4>
      );
    case 5:
      return (
        <h5 className="mt-0 text-base font-semibold" {...(id && { id })}>
          {children}
        </h5>
      );
    case 6:
      return (
        <h6 className="mt-0 text-sm font-semibold" {...(id && { id })}>
          {children}
        </h6>
      );
    default:
      return (
        <div className="text-base font-semidbold" {...(id && { id })}>
          {children}
        </div>
      );
  }
}
