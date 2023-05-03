interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return <main className="flex-grow my-4">{children}</main>;
}
