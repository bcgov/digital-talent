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
        <h1 className="text-3xl font-semibold" {...(id && { id })}>
          {children}
        </h1>
      );
    case 2:
      return (
        <h1 className="text-2xl font-semibold" {...(id && { id })}>
          {children}
        </h1>
      );
    case 3:
      return (
        <h1 className="text-xl font-semibold" {...(id && { id })}>
          {children}
        </h1>
      );
    case 4:
      return (
        <h1 className="text-lg font-semibold" {...(id && { id })}>
          {children}
        </h1>
      );
    case 5:
      return (
        <h1 className="text-base font-semibold" {...(id && { id })}>
          {children}
        </h1>
      );
    case 6:
      return (
        <h1 className="text-sm font-semibold" {...(id && { id })}>
          {children}
        </h1>
      );
    default:
      return (
        <div className="text-base font-semidbold" {...(id && { id })}>
          {children}
        </div>
      );
  }
}
