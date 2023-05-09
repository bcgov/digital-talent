/* eslint-disable @typescript-eslint/no-explicit-any */
type IconListProps = {
  children: React.ReactNode;
};

export default function IconList({ children }: IconListProps) {
  return <ul className="mt-0 pl-0">{children}</ul>;
}
