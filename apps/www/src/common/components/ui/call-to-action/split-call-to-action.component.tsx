import Link from 'next/link';
import { Button } from '../button';
import { CallToActionProps } from './call-to-action.component';

type SplitCallToActionProps = {
  primary: CallToActionProps;
  secondary: CallToActionProps;
};

export default function SplitCallToAction({ primary, secondary }: SplitCallToActionProps) {
  return (
    <div className="text-white">
      <div className="flex flex-col sm:flex-row">
        {/* Left Box */}
        <div className="basis-1/2 bg-bcgov-blue-dark flex justify-end items-center py-2">
          <div className="flex px-4 w-full 2xl:max-w-[768px] xl:max-w-[640px] lg:max-w-[512px] md:max-w-[384px] sm:max-w-[320px]">
            {/* Content */}
            <div className="flex flex-col gap-4 p-4">
              <h1 className="font-bold text-4xl">{primary.title}</h1>
              <span className="font-normal">{primary.description}</span>
              <Link href={primary.button.href} target={primary.button.href.startsWith('http') ? '_blank' : '_self'}>
                <Button className="w-full" variant="call-to-action">
                  {primary.button.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Right Box */}
        <div className="basis-1/2 bg-bcgov-blue flex items-center my-2 py-2">
          <div className="flex px-4 w-full 2xl:max-w-[768px] xl:max-w-[640px] lg:max-w-[512px] md:max-w-[384px] sm:max-w-[320px]">
            {/* Content */}
            <div className="flex flex-col gap-4 p-4">
              <h1 className="font-bold text-4xl">{secondary.title}</h1>
              <span className="font-normal">{secondary.description}</span>
              <Link href={secondary.button.href} target={secondary.button.href.startsWith('http') ? '_blank' : '_self'}>
                <Button className="w-full border" variant="ghost">
                  {secondary.button.text}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
