import { InferGetServerSidePropsType } from 'next';
import Link from 'next/link';
import slugify from 'slugify';
import Container from '../components/Container';
import { H1, H2 } from '../components/Heading';
import { Opportunity } from './api/opportunities';

const daysUntilClose = Math.floor((new Date('10/31/2023').getTime() - new Date().getTime()) / (1000 * 3600 * 24));

function OpportunityCard({ opportunity }: { opportunity: Opportunity }) {
  return (
    <Link href={`/opportunities/${slugify(`${opportunity.requisition_id} ${opportunity.title}`).toLowerCase()}`}>
      <div className="rounded-md border-2 p-3 bg-white hover:bg-bcgov-blue-ultralight hover:cursor-pointer">
        <div className="flex flex-row gap-4">
          <span className="text-xl font-bold">{opportunity.title}</span>
          <div className="grow" />
          <span className="text-md">Closes October 31, 2023 11:59PM Pacific</span>
        </div>
        <div className="flex flex-row gap-4">
          <svg
            className="w-6 h-6 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-md italic">
            {opportunity.ministries.length > 1 ? 'Multiple Ministries' : opportunity.ministries[0]}
          </span>
          <div className="grow" />
          <span className="text-md italic">{daysUntilClose} days left</span>
        </div>
        <div className="flex flex-row gap-4">
          <svg
            className="w-6 h-6 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-md italic">
            {opportunity.locations.length > 1 ? 'Multiple Locations' : opportunity.locations[0]}
          </span>
          <div className="grow" />
        </div>
        <div className="flex flex-row gap-4">
          {opportunity.telework_ok && (
            <>
              <svg
                className="w-6 h-6 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-md">Telework available</span>
            </>
          )}
          <div className="grow" />
          <button className="rounded-md bg-bcgov-blue hover:bg-bcgov-blue-light text-white px-4 py-1" type="button">
            Apply
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function Home({ data: { data } }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Container>
        <div>
          <H1>Join our team, serve your community</H1>
          Find a career in information technology with BC Public Service
        </div>
        <div>
          <H2>Current openings in information technology</H2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-2 gap-x-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="role">
                <b>What role are you interested in?</b>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="role"
                >
                  <option value="0">Design</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="level">
                <b>Level</b>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="level"
                >
                  <option value="*">All</option>
                </select>
              </label>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="location">
                <b>Location</b>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="location"
                >
                  <option value="*">All</option>
                </select>
              </label>
            </div>
          </div>
          <span className="font-bold">Filters</span>
          <br />
          <button className="inline-block border-2 border-bcgov-blue rounded-md px-4 py-1 capitalize" type="button">
            DESIGN ✕
          </button>
          <br />
        </div>
        {/* Opportunities */}
        <div className="flex flex-col my-4 space-y-4">
          {data.map((opportunity: Opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/opportunities');
  const data = await res.json();

  return { props: { data } };
}
