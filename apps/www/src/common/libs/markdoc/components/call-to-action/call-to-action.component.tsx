interface CallToActionProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function CallToAction({ children, description, title }: CallToActionProps) {
  return description ? (
    <div className="bg-bcgov-blue-dark  text-white py-12 w-full flex flex-col">
      {title && <div className="container font-bold mx-auto mb-4 text-4xl">{title}</div>}
      {description && <div className="container mx-auto text-lg">{description}</div>}
      <div className="container mx-auto mt-4">{children}</div>
    </div>
  ) : (
    <div className="bg-bcgov-blue-dark font-bold text-6xl text-white py-12 w-full flex flex-col">
      {title && <div className="container mx-auto">{title}</div>}
    </div>
  );
}
