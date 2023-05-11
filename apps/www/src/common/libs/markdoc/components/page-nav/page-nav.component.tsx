/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-nested-ternary */

'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export type PageNavProps = {
  headings: Record<string, any>[];
};

export default function PageNav({ headings }: PageNavProps) {
  const filtered = headings.filter((h) => h.id != null && [1, 2, 3].includes(h.level));

  const [active, setActive] = useState(headings.length > 0 ? headings[0].id : '');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = filtered.map(({ id }) => document.getElementById(id));
      const visibleHeadings = headingElements.filter((el) => isElementInViewport(el));

      if (visibleHeadings.length > 0 && visibleHeadings[0] != null) {
        setActive(visibleHeadings[0].id);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [active, filtered]);

  const isElementInViewport = (el: HTMLElement | null) => {
    const rect = el?.getBoundingClientRect();
    return rect
      ? rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      : false;
  };

  const pathname = usePathname();

  return (
    <ul className="list-none list-inside sticky top-14">
      {filtered.map((heading) => {
        const href = `#${heading.id}`;
        // const active = typeof window !== 'undefined' && window.location.hash === href;
        return (
          <a href={`${pathname}${href}`} key={heading.title}>
            <li
              className={[
                active === heading.id
                  ? 'border-l-4 border-l-bcgov-blue-dark bg-bcgov-blue-light'
                  : 'border-l-4 border-transparent',
                heading.level === 1 ? 'font-bold' : 'font-normal',
                heading.level === 1 ? 'pl-2' : heading.level === 2 ? 'pl-6' : heading.level === 3 ? 'pl-10' : undefined,
                'border-b border-b-gray-200',
                'hover:bg-bcgov-blue-light text-bcgov-blue-dark',
                'py-1',
              ].join(' ')}
            >
              <div className="h-full w-full">{heading.title}</div>
            </li>
          </a>
        );
      })}
    </ul>
  );
}
