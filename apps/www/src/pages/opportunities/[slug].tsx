/* eslint-disable no-console */
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import Container from '../../components/Container';
import { H1, H2, H3 } from '../../components/Heading';
import { ApiResponse } from '../../interfaces/api-response';
import { Opportunity } from '../api/opportunities';

export default function Page({ data: { data } }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Container className="flex flex-col space-y-4">
        <div id="heading">
          <H1 className="mb-0">{data?.title}</H1>
          <span className="font-bold">REQUISITION {data?.requisition_id}</span>
          <br />
        </div>
        <div className="apply-now">
          <button className="rounded-md bg-bcgov-blue hover:bg-bcgov-blue-light text-white px-4 py-1" type="button">
            Apply Now
          </button>
        </div>
        <div id="summary">
          <div>
            {/* Closing Date */}
            <span className="text-md">
              <span className="font-bold">Closing Date:</span> October 31, 2023 11:59PM Pacific
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
            <div>
              <div>
                {/* Job Type */}
                <span className="text-md">
                  <span className="font-bold">Job Type:</span> {data?.job_type}
                </span>
              </div>
              <div>
                {/* Classification */}
                <span className="text-md">
                  <span className="font-bold">Classification:</span> {data?.classification}
                </span>
              </div>
            </div>
            <div>
              <div>
                {/* Ministry / Organization */}
                <span className="text-md">
                  <span className="font-bold">Ministry / Organization:</span> {data?.organization}
                </span>
              </div>
              <div>
                {/* Ministry Branch / Division */}
                <span className="text-md">
                  <span className="font-bold">Ministry Branch / Division:</span> {data?.division}
                </span>
              </div>
            </div>
          </div>
          <div>
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Hiring Manager */}
              <span className="text-md">
                <span className="font-bold">Hiring Manager:</span> {data?.hiring_manager.name} (
                {data?.hiring_manager.title} - {data?.hiring_manager.ministry})
              </span>
              <div className="grow" />
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
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Salary Range */}
              <span className="text-md">
                <span className="font-bold">Salary Range:</span> {data?.salary_range}
              </span>
              <div className="grow" />
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

              {/* Location */}
              <span className="text-md">
                <span className="font-bold">Location:</span>{' '}
                {(data?.locations ?? []).length > 1 ? 'Multiple Locations' : data?.locations[0]}
              </span>
              <div className="grow" />
            </div>
          </div>
        </div>
        <div id="attachments">
          <H2>Attachments</H2>
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-md underline cursor-pointer text-bcgov-blue-light">
              Full Stack Developer IS 27R job profile
            </span>
            <div className="grow" />
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-md underline cursor-pointer text-bcgov-blue-light">
              Ministry information - description of the open opportunities
            </span>
            <div className="grow" />
          </div>
        </div>
        <hr />
        <div className="border-l-4 border-l-bcgov-blue bg-bcgov-blue-ultralight" id="multiple-positions">
          <div className="px-4 py-2 flex flex-row space-x-2">
            <div>
              <svg
                className="w-6 h-6 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold">There are multiple positions available</span>
              <br />
              <span>
                A cross-ministry eligibility list may also be established to fill future permanent vacancies in multiple
                ministries and locations within British Columbia, some may have remote work/hybrid options.
              </span>
              <ul className="list-disc ml-6">
                <li>
                  Positions will be offered in the rank order of successful candidates, considering preferred skillset,
                  ministry, and location preferences selected by the applicants during the hiring process.
                </li>
                <li>An applicant’s preferences will be considered but cannot be guaranteed.</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="multi-competition-text">
          This posting allows a candidate to apply once to be eligible for multiple competitions. Read more about how it
          works.
        </div>
        <div id="education">
          <H2>Education & Experience Requirements</H2>
          <span>
            In order to be considered for this position, your application must clearly demonstrate how you meet the
            education and experience as outlined below:
          </span>
        </div>
        <div id="preferences">
          <H2>Preference may be given to those applicants with experience</H2>
        </div>
        <div id="application-requirements">
          <H2>Application Requirements</H2>
        </div>
        <div id="what-to-expect">
          <H2>What to expect after applying</H2>
        </div>
      </Container>
      <div className="bg-gray-100 pb-4">
        <Container className="flex flex-col space-y-4">
          <H3>Conditions of employment to BC Government:</H3>
          <span>
            <b>COVID-19 Vaccination Policy</b>: On November 1, 2021 the BC Public Service announced the COVID-19
            Vaccination Policy that defines the conditions and expectations for BC Public Service employees regarding
            vaccination against COVID-19. Among other possible measures, proof of vaccination will be required. It is a
            term of acceptance of employment that you agree to comply with all vaccination requirements that apply to
            the public service. More information. <br />
            <br />
            <b>Criminal Record Check</b>: Successful completion of security screening requirements of the BC Public
            Service, which may include a criminal records check, and/or Criminal Records Review Act (CRRA) check, and/or
            enhanced security screening checks as required by the ministry.
          </span>
        </Container>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log('context: ', context);

  const { slug } = context.params as Record<string, unknown>;
  console.log('slug: ', slug);
  const requisition = (slug as string).split('-')[0];
  console.log('requisition: ', requisition);
  const res = await fetch(`http://localhost:3000/api/opportunities/${requisition}`);
  const data: ApiResponse<Opportunity> = await res.json();

  if (!data || data.status === 404) {
    return {
      notFound: true,
    };
  }

  console.log('data: ', data);

  return { props: { data } };
}
