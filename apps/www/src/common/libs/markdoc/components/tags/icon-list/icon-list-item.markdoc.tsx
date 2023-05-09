/* eslint-disable @typescript-eslint/no-explicit-any */
import * as lucideIcons from 'lucide-react';
import { BanIcon, LucideIcon } from 'lucide-react';

type IconListItemProps = {
  color: string;
  icon: any;
  text: string;
  children?: React.ReactNode;
};
export default function IconListItem({ color = '#000000', icon, text, children }: IconListItemProps) {
  const icons = lucideIcons as unknown as any[];
  const Icon: LucideIcon = icons[icon];

  return color && icon && text && children ? (
    <li className="flex flex-row gap-2">
      <span className="py-1 shrink-0 w-6">
        {(Icon && <Icon className="h-5" color={color} />) || <BanIcon className="h-5 text-red-500" />}
      </span>
      <div className="flex flex-col gap-2">
        <span className="text-lg font-semibold">{text}</span>
        <span>{children}</span>
      </div>
    </li>
  ) : (
    <li className="flex flex-row gap-2">
      <span className="py-1 shrink-0 w-6">
        {(Icon && <Icon className="h-5" color={color} />) || <BanIcon className="h-5 text-red-500" />}
      </span>
      <span>{text}</span>
    </li>
  );
}
