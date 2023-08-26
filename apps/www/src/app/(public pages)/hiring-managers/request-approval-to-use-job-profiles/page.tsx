import { ExternalLink, Mailbox } from 'lucide-react';
import { Metadata } from 'next';
import Link from '../../../../common/components/link.component';
import { Button } from '../../../../common/components/ui/button';
import Heading from '../../../../common/components/ui/heading.component';
import Hero from '../../../../common/components/ui/hero/hero.component';
import { Icon } from '../../../../common/components/ui/icon.component';
import { wrapTitle } from '../../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Request approval to use job profiles'),
};

// <Link href="https://www2.gov.bc.ca/gov/content/careers-myhr/hiring-managers">
//   <Button className="text-lg w-full md:w-72" variant="outline">
//     myHR Hiring resources <ExternalLink className="w-5 ml-1.5" />
//   </Button>
// </Link>

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero title="Request approval to use job profiles" variant="section-heading" />
      <div className="flex flex-col">
        <div className="container flex flex-col gap-4 mb-12">
          <p>
            Digital transformation in government requires transforming the way we work. Agile methods encourage teams to
            build quickly, test what they’ve built and iterate their work based on regular feedback with users.
          </p>
          <p>
            To support transformation, the {` `}
            <Link href="https://psa.sp.gov.bc.ca/sites/HRSUPPORT/Jobstore/Digital%20Talent/Forms/AllItems.aspx">
              <Button className="text-md px-0 py-0 underline h-4" variant="link">
                Digital Talent job profiles <ExternalLink className="w-4 ml-1.5" />
              </Button>
            </Link>
            {` `} were created in 2017 to enable us to build our internal talent capacity to modernize our services that
            meets the needs and expectations of the citizens of British Columbia.
          </p>
          <p>
            The approval process gives us and hiring managers the ability to make sure teams are using Agile methods and
            appropriate job profiles are being used to attract and retain the right talent to support digital
            transformation across the BC Public Service.
          </p>
          <div>
            <span className="font-bold">Approval is needed for:</span>
            <ul className="list-disc ml-8 pt-4">
              <li>Requesting a position number from myHR.</li>
              <li>Self-run hiring for permanent, temporary, and expression of interest positions.</li>
            </ul>
          </div>
          <div>
            <p>These are the top benefits of the revised job profiles:</p>
            <div className="my-4 space-y-4 md:flex md:space-y-0 md:space-x-4">
              {/* Left */}
              <div className="flex items-center space-x-4">
                <div className="">
                  <Icon icon="GraduationCap" />
                </div>
                <div>Core job accountabilities and requirements revised by subject matter experts. </div>
              </div>
              {/* Middle */}
              <div className="flex items-center space-x-4">
                <div className="">
                  <Icon icon="Check" />
                </div>
                <div>No classification reviews needed.</div>
              </div>
              {/* Right */}
              <div className="flex items-center space-x-4">
                <div className="">
                  <Icon icon="HelpingHand" />
                </div>
                <div>Additional support on organizational design for new and growing teams.</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <div className="mt-4">
              <Link href="https://submit.digital.gov.bc.ca/app/form/submit?f=895773c9-6359-4b46-af49-7f0656cef63e">
                <Button className="text-sm w-full md:w-88 md:text-lg" variant="default">
                  Request approval to use Digital Talent job profile <ExternalLink className="w-5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Blue */}
        <div className="bg-bcgov-blue-light py-6 mb-10">
          <div className="container flex flex-col gap-4 mx-auto">
            <Heading className="text-bcgov-blue-dark" level={2}>
              Digital Talent Job Profiles
            </Heading>
            <p>
              Digital Talent (DT) are roles in the BC Public Service are focus on designing, developing, and deploying
              digital products and/or services. Currently available {` `}
              <Link href="https://psa.sp.gov.bc.ca/sites/HRSUPPORT/Jobstore/Digital%20Talent/Forms/AllItems.aspx">
                <Button className="text-md px-0 py-0 underline h-4" variant="link">
                  Digital Talent Job Profiles <ExternalLink className="w-4 ml-1.5" />
                </Button>
              </Link>
              {` `} include:
            </p>
            <ul className="list list-disc ml-8">
              <li>Product Owners</li>
              <li>UX Designers and Researchers</li>
              <li>Service Designers (Coming soon)</li>
              <li>Full Stack Developers</li>
              <li>Scrum Master </li>
              <li>Site Reliability Specialist </li>
              <li>DevOps Specialists</li>
            </ul>
            We are continuously improving and adding new job profiles.
            <Heading level={3}>Other ways to hire and build your Agile team</Heading>
            <ul>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <Link href="/hiring-managers/hiring-options">Hiring Options</Link>. Explore three options for hiring.
                </span>
              </li>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <Link href="/hiring-managers/hiring-options/cross-ministry-hiring">
                    Cross-Ministry Hiring Program
                  </Link>
                  . Great source of information for hiring managers who want to join CMHP.
                </span>
              </li>
            </ul>
            <div className="flex flex-row gap-2 mt-2">
              <Mailbox /> <span className="font-bold">Have questions?</span>{' '}
              <a className="text-bcgov-blue-dark underline" href="mailto:digital.talent@gov.bc.ca">
                digital.talent@gov.bc.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Approval is needed for:
// Requesting a position number from myHR.
// Self-run hiring for permanent, temporary, and expression of interest positions.
