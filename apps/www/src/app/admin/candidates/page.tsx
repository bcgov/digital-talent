/* eslint-disable react/no-unstable-nested-components */

'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { CheckIcon, XIcon } from 'lucide-react';
import { useMemo } from 'react';
import { Badge } from '../../../common/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../../common/components/ui/hover-card';
import Table from '../../../common/components/ui/Table';
import { Candidate, candidateData } from './data';

export default function Page() {
  const candidates = useMemo(() => candidateData, []);

  const columnHelper = createColumnHelper<Candidate>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email', {
      header: () => 'Email',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('citizenship', {
      header: () => 'Citizenship',
      cell: (info) => {
        const raw = info.getValue();
        const parts = raw.split('_');
        const formatted = parts
          .map((p) => {
            return p.slice(0, 1).toUpperCase() + p.slice(1).toLowerCase();
          })
          .join(' ');

        return (
          <HoverCard>
            <HoverCardTrigger>
              {raw === 'INELIGIBLE' ? (
                <XIcon className="cursor-zoom-in text-red-500" />
              ) : (
                <CheckIcon className="cursor-zoom-in text-green-500" />
              )}
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="prose">{formatted}</div>
            </HoverCardContent>
          </HoverCard>
        );
      },
    }),
    columnHelper.accessor('classification', {
      header: () => 'Role',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('num_years_exp', {
      header: () => <span className="block text-center">Years Experience</span>,
      cell: (info) => <span className="text-center block">{info.getValue()}</span>,
    }),
    columnHelper.accessor('locations', {
      header: () => 'Locations',
      cell: (info) => {
        return (
          <HoverCard>
            <HoverCardTrigger>
              <Badge className="cursor-zoom-in" variant="secondary">
                {info.getValue().length} skills
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="prose">
                <ul>
                  {info.getValue().map((location) => (
                    <li key={location}>{location}</li>
                  ))}
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      },
    }),
    columnHelper.accessor('skills', {
      header: () => 'Skills',
      cell: (info) => {
        return (
          <HoverCard>
            <HoverCardTrigger>
              <Badge className="cursor-zoom-in" variant="secondary">
                {info.getValue().length} skills
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="prose">
                <ul>
                  {info.getValue().map((s) => (
                    <li key={s.name}>
                      {s.name} ({s.num_years_exp} years exp)
                    </li>
                  ))}
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      },
    }),
  ];

  return (
    <>
      <div className="prose mb-4">
        <h1>Candidates</h1>
      </div>
      {/* <div className="flex mb-2">
        <div className="flex-auto" />
        <div className="w-40">
          <Input onChange={(event) => event.target.value} placeholder="Search" />
        </div>
      </div> */}
      <Table columns={columns} data={candidates} />
    </>
  );
}
