/* eslint-disable @typescript-eslint/no-explicit-any */
import * as lucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import React from 'react';
import { cn } from '../../../../../utils/cn.util';

type IconListItemProps = {
  color: string;
  icon: number | string;
  iconBgColor?: string;
  iconColor?: string;
  children?: React.ReactNode;
};
export default function IconListItem({
  color = '#000000',
  icon,
  iconColor,
  iconBgColor = 'bg-transparent',
  children,
}: IconListItemProps) {
  const icons = lucideIcons as unknown as Record<string, any>;
  const Icon: LucideIcon | undefined = typeof icon === 'number' ? undefined : icons[icon];

  return (
    <li className="flex flex-row gap-2">
      <div
        className={cn(
          iconBgColor ? `${iconBgColor}` : 'bg-transparent',
          iconColor ? `${iconColor}` : 'text-primary',
          'flex h-8 rounded-[50%] shrink-0 w-8',
        )}
      >
        <div className="mx-auto my-auto">{Icon ? <Icon /> : icon}</div>
      </div>
      {children ? (
        <div className="flex flex-col gap-2">
          <div>{children}</div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div>{children}</div>
        </div>
      )}
    </li>
  );
}
