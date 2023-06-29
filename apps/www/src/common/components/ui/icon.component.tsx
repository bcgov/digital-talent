'use client';

import * as lucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

type IconProps = {
  icon: number | string;
};

export const Icon = ({ icon }: IconProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons = lucideIcons as unknown as Record<string, any>;
  const IconToRender: LucideIcon | undefined = typeof icon === 'number' ? undefined : icons[icon];

  return (
    <div className="flex aspect-square w-14 bg-bcgov-gold-light rounded-full">
      <div className="m-auto aspect-square w-8 items-stretch rounded-full text-center ">
        {IconToRender ? <IconToRender className="h-full w-full" /> : icon}
      </div>
    </div>
  );
};
