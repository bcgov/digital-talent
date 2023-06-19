import Link from 'next/link';
import { Button } from '../button';

export type CallToActionButtonProps = {
  text: string;
  href: string;
};

export interface CallToActionProps {
  title?: string;
  description?: string;
  button: CallToActionButtonProps;
}

export default function CallToAction({ description, title, button }: CallToActionProps) {
  return description ? (
    <div className="bg-bcgov-blue-dark  text-white py-8 w-full flex flex-col">
      {title && <div className="container font-bold mx-auto mb-4 text-4xl">{title}</div>}
      {description && <div className="container mx-auto text-lg">{description}</div>}
      {button != null && (
        <div className="container mx-auto mt-4">
          <Button variant="call-to-action">
            <Link href={button.href} target={button.href.startsWith('http') ? '_blank' : '_self'}>
              {button.text}
            </Link>
          </Button>
        </div>
      )}
    </div>
  ) : (
    <div className="bg-bcgov-blue-dark font-bold text-6xl text-white py-8 w-full flex flex-col">
      {title && <div className="container mx-auto">{title}</div>}
    </div>
  );
}
