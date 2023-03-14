import Container from '../../components/Container';
import { H1, H2, H3 } from '../../components/Heading';

function Skeleton() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-1/2 my-4"> </h3>
      <ul className="mt-5 space-y-3">
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
        <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
      </ul>
    </div>
  );
}

export default function HiringManager() {
  return (
    <div>
      <div className="bg-bcgov-blue h-28 flex flex-col align-middle shrink-0">
        <H1 className="text-white mx-auto my-auto">Cross Ministry Hiring Pilot</H1>
      </div>

      <Container>
        <H2>Overview</H2>
        <p>
          The Cross-Ministry Hiring Pilot (CMHP) allows multiple ministries to benefit from a shared job posting and
          hiring process. It creates an eligibility lists with pre-qualified and candidates that hiring managers can use
          to fill vacancies.
        </p>
        <div className="flex flex-col gap-4 my-4">
          <div className="flex flex-row gap-4 h-full">
            <div className="h-24 w-24 rounded-full my-auto bg-orange-50 shrink-0" />
            <div className="text-xl font-bold flex flex-col h-full my-auto w-56">For hiring managers</div>
            <div className="my-auto">
              <ul className="list-disc ml-4">
                <li>Expedited recruitment process</li>
                <li>Administrative support for hiring managers</li>
                <li>Draft user-friendly materians based on candidate feedback</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-4 h-full">
            <div className="h-24 w-24 rounded-full my-auto bg-orange-50 shrink-0" />
            <div className="text-xl font-bold flex flex-col h-full my-auto w-56">For candidates</div>
            <div className="my-auto">
              <ul className="list-disc ml-4">
                <li>Only has to apply once for multiple opportunities</li>
                <li>Location and team preferences taken into account for offers</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-4 h-full">
            <div className="h-24 w-24 rounded-full my-auto bg-orange-50 shrink-0" />
            <div className="text-xl font-bold flex flex-col h-full my-auto w-56">Across BC gov</div>
            <div className="my-auto">
              <ul className="list-disc ml-4">
                <li>Hiring teams can leverage a cross-ministry eligibility list of qualified candidates</li>
                <li>More digital talent roles and knowledge are remain internally</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-2xl my-4 italic">We want to bring the best digital talent to BC gov</p>
        <p>
          Our team is passionate about delivering a better service, which will ultimately bring more and higher quality
          candidates to work for BC Public Service. That means trying new things, learning, and improving our process.
          We are leading the cross-ministry hiring pilot for digital talent in hopes of creating a scalable solution to
          one of BC gov’s critical job streams.
        </p>
        <p className="text-lg my-4 font-bold">Requirements For Joining A Cross-Ministry Hiring Competition</p>
        <p>
          In order to attract and retain candidates, as well as meet the hiring practices of BC gov, hiring teams are
          required to verify they meet all the requirements to hire digital talent.
        </p>
        <ul className="list-disc ml-4">
          <li>Be approved to hire</li>
          <li>Have your required hiring documents</li>
          <li>Agree to our Terms of Service</li>
          <li>Meet the organization requirements of the job profile (listed on job profile)</li>
        </ul>
        <H3>Positions We Hire For</H3>
        <p>The Digital Talent Attraction & Development (DTAD) team supports the following job profiles:</p>
        <ul className="list-disc ml-4">
          <li>Developers (IS 18-30)</li>
          <li>Dev Ops Specialists (IS 27)</li>
          <li>Product Management (IS 30, Band 3)</li>
          <li>Scrum Master (IS 24-27)</li>
          <li>Site Reliability Specialist (IS 27-30)</li>
          <li>Users Experience Researcher (AO 24-27)</li>
          <li>User Experience Designer (IS 24-27)</li>
        </ul>
        <p>CMHP only hires for full-time permanent positions at this time.</p>
        <p className="font-bold">Don’t see the position you’re looking for?</p>
        <p>
          You can reach out to digital.talent@gov.bc.ca to see what you’re other options are and to potentially reuse
          some of our resources.
        </p>
        <H2>How It Works</H2>
        <H3>Overall Process</H3>
        <div className="flex flex-col gap-4">
          {/* Join an upcoming competition */}
          <div className="flex flex-row gap-4">
            <div className="h-8 w-8 text-center text-white rounded-full bg-bcgov-blue shrink-0 font-mono">
              <p className="h-full my-1">1</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-xl">Join an upcoming competition</span>
              <p>If you meet all the hiring requirements, you can join an upcoming competition for a role.</p>
              <ul className="list-disc mx-4">
                <li>See requirements</li>
                <li>See upcoming competitions & sign up for notifications</li>
              </ul>
            </div>
          </div>
          {/* We will create a job posting */}
          <div className="flex flex-row gap-4">
            <div className="h-8 w-8 text-center text-white rounded-full bg-bcgov-blue shrink-0 font-mono">
              <p className="h-full my-1">2</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-xl">We Will Create A Job Posting</span>

              <p>
                We will meet with all the hiring managers to understand their hiring preference. We will draft a
                user-friendly easy to read posting about the role with information about all the opportunities.
              </p>
            </div>
          </div>
          {/* Candidates apply */}
          <div className="flex flex-row gap-4">
            <div className="h-8 w-8 text-center text-white rounded-full bg-bcgov-blue shrink-0 font-mono">
              <p className="h-full my-1">3</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-xl">Candidates Apply</span>
              <span className="font-bold italic">Positions are open for 3 weeks</span>
              <p>
                Our team of CITZ and PSA staff help with recruiting, publishing the job post, and answering questions as
                they come in to make sure we attract as many qualified candidates as possible.
              </p>
            </div>
          </div>
          {/* Evaluate and interview candidates */}
          <div className="flex flex-row gap-4">
            <div className="h-8 w-8 text-center text-white rounded-full bg-bcgov-blue shrink-0 font-mono">
              <p className="h-full my-1">4</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-xl">Evaluate And Interview Candidates</span>
              <p>
                Hires go through the same meritorious process as other BC gov candidates: screening, assessment,
                interviews, and reference checks. We have tailored the information we ask to reduce friction for
                applying, while still giving the hiring team enough information to make the decision efficiently.
              </p>
              <ul className="list-disc mx-4">
                <li>Time commitment for hiring managers</li>
              </ul>
            </div>
          </div>
          {/* We match candidates to opportunities */}
          <div className="flex flex-row gap-4">
            <div className="h-8 w-8 text-center text-white rounded-full bg-bcgov-blue shrink-0 font-mono">
              <p className="h-full my-1">5</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-xl">We Match Candidates To Opportunities</span>
              <p>
                We have a candidate-driven process to create the best experience we can for new hires. Once ranked,
                candidates are made offers based on their location and team preferences.
              </p>
              <ul className="list-disc mx-4">
                <li>Learn more about the match-making process</li>
              </ul>
            </div>
          </div>
          {/* Offers are sent out */}
          <div className="flex flex-row gap-4">
            <div className="h-8 w-8 text-center text-white rounded-full bg-bcgov-blue shrink-0 font-mono">
              <p className="h-full my-1">6</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-bold text-xl">Offers Are Sent Out</span>
              <p>
                An eligibility list is established for every competition we run. Taking into account scores, years of
                service, and preferences, we will send out offers. When there are more candidates than opportunities,
                those eligibility lists are made available to other hiring teams.
              </p>
              <ul className="list-disc mx-4">
                <li>Learn about DTAD team eligibility lists</li>
              </ul>
            </div>
          </div>
        </div>
        <H3>What The Digital Talent Team Will Do</H3>
        <div className="flex flex-col gap-4">
          <p>We've partnered with PSA to find ways to streamline the hiring process.</p>
          {/* Pre-Posting Services */}
          <div>
            <span className="font-bold">Pre-Posting Services</span>
            <ul>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Create a new position number</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Grant approval of Digital Talent Job Profiles</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Submit hiring and requisition requests</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    Develop job postings that highlight your program area, the position's team, and the opportunities
                    available
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Create clear, concise, and commprehensive questionnaires</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Provide broad promotion and marketing strategies</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Post-Posting Services */}
          <div>
            <span className="font-bold">Post-Posting services</span>
            <ul>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    Redaction dentifying information such as names, email, current ministry, and location to remove bias
                    and support a more and equitable process
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Provide quality skill testing assessments and intuitive marking guides</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Develop interview questions that reflect the behavioral competencies of your posting</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Participate in screening of applicants</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Provide timely communications with applicants and hiring managers</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Facilitate/Participate on hiring panels</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Conduct candidate reference checks</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Draft Offer letters</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Work with hiring managers to draft and process preliminary onboarding documents</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Provide full documentation of hiring decisions to the PSA</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Provide candidate feedback</div>
                </div>
              </li>
            </ul>
          </div>
          {/* Overall Experience */}
          <div>
            <span className="font-bold">Overall Experience</span>
            <ul>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>Conduct candidate surveys to improve the hiring process for candidates</div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-2">
                  <svg
                    className="w-6 h-6 shrink-0 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    Solicit feedback and conduct workshops with hiring managers to inform service improvements from the
                    internal process side
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <H3>Matching Candidates & Opportunities</H3>
        <Skeleton />
        <H2>Get Started</H2>
        <H3>Are You Ready To Join A Digital Talent Competition?</H3>
        <div className="flex flex-col gap-4">
          <p>
            On this page you’ll find detailed information about the requirements, expected commitments, and submission
            form.
          </p>
          <p>
            In order to attract and retain candidates, as well as meet the hiring practices of BC gov, hiring teams are
            required to verify they meet all the requirements to hire digital talent.
          </p>
          <div className="flex flex-col gap-4">
            {/* Be Approved To Hire */}
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
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-xl">Be Approved To Hire</span>
                <p>
                  Approval from your [supervisor]
                  <br />
                  <br />
                  Deputy minister designate to hire
                </p>
              </div>
            </div>
            {/* Have Your Required Hiring Documents */}
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
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-4">
                <span className="font-bold text-xl">Have Your Required Hiring Documents</span>
                <p>Your organization chart showing reporting relationship</p>
              </div>
            </div>
            {/* Meet The Organization Requirements Of The Job */}
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
                  d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-4">
                <span className="font-bold text-xl">Meet The Organization Requirements Of The Job</span>
                <p>
                  Specific job profiles have context that must be met by the hiring team. The context is described in a
                  blue box on the job profile document.
                </p>
                <div className="border-l-4 border-l-bcgov-blue bg-bcgov-blue-ultralight" id="multiple-positions">
                  <div className="px-4 py-2 my-4 flex flex-row space-x-2">
                    <div>
                      <p>
                        <span className="font-bold">EXAMPLE</span>
                        <br />
                        <span className="cursor-pointer underline">IS27 Full Stack Developer context requirements</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Agree To The Terms of Service */}
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div className="flex flex-col gap-4">
                <span className="font-bold text-xl">Agree To The Terms Of Service</span>
                <p>
                  Agree to DTAD's Terms of Service and the Public Service Act Part 3 - Appointments to the Public
                  Service
                </p>
              </div>
            </div>
          </div>
        </div>
        <H3>Hiring Manager Time Commitments</H3>
        <div className="flex flex-col gap-4">
          <span>We have 2 involvement options for hiring managers:</span>
          <ul className="list-disc ml-4">
            <li>Minimal Involvement</li>
            <li>Full Involvement</li>
          </ul>
          <span>
            We will try to honor your preference, but involvement ultimately depends on the number of candidates and
            hiring managers we have. For instance, more hiring managers might want to be fully involved that we have
            have panel interviews for.
          </span>
          <div className="border border-gray-200 rounded-md shadow-md p-4 flex flex-col gap-4">
            <span className="text-lg font-bold">Minimal involvement</span>
            <p>
              Allows you to have have input on the initial posting and indicate your preference on successful
              candidates, but you’re not involved in assessing candidates.
            </p>
            <div>
              <ul>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Can access the eligibility list of the competition</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Review and approve job posting draft, job profile, and questionnaire</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      Provide candidate preference by reviewing successful candidates’ information (resumes,
                      assessments, and interview panel notes)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <span className="font-bold">Time commitment</span>
            <div>
              <ul>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-bcgov-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      1-hour consultation meeting to review, approve, and provide suggested edits in an initial
                      consultation meeting for the Job posting drafts, Job Profiles and Questionnaires
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-bcgov-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      48-hour turn around time for reviewing successful candidate information and informing the Digital
                      Talent team rank your preferred candidates. Candidate information you’ll have to review includes
                      redacted resumes, assessments, and interview panel notes.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-gray-200 rounded-md shadow-md p-4 flex flex-col gap-4">
            <span className="text-lg font-bold">Full involvement</span>
            <p>
              You are able to provide input on the job posting and assess candidates along the process. Hiring managers
              who want to be able to interact with candidates might prefer this option.
            </p>
            <div>
              <ul>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Can access the eligibility list of the competition</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Review and approve job posting draft, job profile, and questionnaire</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Review and screen candidates</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Provide input on drafts of assessments</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Score assessments</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      Must commit to at least 3 consecutive days for panel interview time with minimal other
                      appointments
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      Ensure CMHP hiring panel speaking notes are read by panel chair following all candidate interviews
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Attend comprehensive consensus panel with other members</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Rank candidates</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>Participate in reference checks</div>
                  </div>
                </li>
              </ul>
            </div>
            <span className="font-bold">Time commitment</span>
            <p>
              In order to stay competitive with candidates who might be receiving offers, we expect a certain amount of
              time to be invested by hiring managers.
            </p>
            <div>
              <ul>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-bcgov-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      Approximately 4.5 hours of consensus meetings with other hiring managers and the DTAD team
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-bcgov-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>3-day turnaround time for reviewing and screening candidates</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-bcgov-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>48-hour turnaround time for reviewing drafts of assessments and providing suggestions</div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-bcgov-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      48-hour turnaround time for marking assessments. Potential additional time required for co-grading
                      assessments
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <svg
                      className="w-6 h-6 shrink-0 text-bcgov-blue"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      Commit to at least 3 consecutive days for panel interview time with minimal other appointments
                    </div>
                  </div>
                </li>
              </ul>
              <br />
              <p className="italic text-sm text-gray-500">
                * Time will always depend on the number of candidates we screen in, but a rough estimate of what to
                expect:
              </p>
            </div>
          </div>
        </div>
        <br />
      </Container>

      <div className="bg-bcgov-blue  flex flex-col align-middle shrink-0">
        <Container className="text-white p-4">
          <H1>Ready to join?</H1>
          <p className="my-4">Submit your position details to the team to join the next cross ministry hiring.</p>
          <button className="rounded-md bg-bcgov-gold hover:bg-bcgov-blue-light text-black px-4 py-1" type="button">
            Apply Now
          </button>
        </Container>
      </div>
    </div>
  );
}
