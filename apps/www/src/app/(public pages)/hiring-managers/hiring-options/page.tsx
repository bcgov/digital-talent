import { Metadata } from 'next';
import Link from '../../../../common/components/link.component';
import { Button } from '../../../../common/components/ui/button';
import Heading from '../../../../common/components/ui/heading.component';
import Hero from '../../../../common/components/ui/hero/hero.component';
import { Icon } from '../../../../common/components/ui/icon.component';
import { wrapTitle } from '../../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Hiring options in the BC Public Service'),
};

export default function Page() {
  return (
    <div className="mb-4">
      <Hero title="Hiring options in the BC Public Service" variant="section-heading" />
      <div className="flex flex-col gap-4">
        <div className="container flex flex-col gap-4 mb-4">
          <p>
            Hiring managers have many choices for hiring staff. Depending on the situation, you can be supported by the
            Public Service Agency (PSA) or the Digital Talent Attraction and Development Team (DTAD).
          </p>
          <Heading level={2}>Available hiring options:</Heading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="bg-gray-300 p-2 text-[1.8rem] flex flex-col">
              <div className="grow font-light leading-8 mb-2">
                1.
                <br />
                Self-run hiring
              </div>
              <div className="font-bold text-base">with the PSA</div>
            </div>
            <div className="bg-bcgov-blue-light p-2 text-[1.8rem] flex flex-col">
              <div className="grow font-light leading-8 mb-2">
                2.
                <br />
                Cross-Ministry Hiring
              </div>
              <div className="font-bold text-base">with the DTAD</div>
            </div>
            <div className="bg-bcgov-blue-light p-2 text-[1.8rem] flex flex-col">
              <div className="grow font-light leading-8 mb-2">
                3.
                <br />
                Eligibility
              </div>
              <div className="font-bold text-base">DTAD or outside competitions</div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-4 mx-auto mb-4">
          <Heading level={3}>1. Self-run hiring</Heading>
          <p>
            This option allows hiring managers to run a competition and be as creative as they wish. PSA offers support
            for self-run hiring upon request. Because of high demand of PSA support across BC Government, this hiring
            can take 3 weeks.
          </p>
          <p>Benefits:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left */}
            <div className="flex flex-row gap-4">
              <div className="shrink-0">
                <Icon icon="Crown" />
              </div>
              <div className="grow">Full control over the schedule, requirements, and final candidates</div>
            </div>
            {/* Right */}
            <div className="flex flex-row gap-4">
              <div className="shrink-0">
                <Icon icon="UserCheck" />
              </div>
              <div className="grow">
                Available for all job types (eg. Temporary Appointments, non-digital talent roles)
              </div>
            </div>
          </div>
          <Link href="https://www2.gov.bc.ca/gov/content/careers-myhr/hiring-managers">
            <Button className="text-lg w-full md:w-72" variant="outline">
              Hiring resources
            </Button>
          </Link>
        </div>

        <div className="bg-bcgov-blue-light py-4 mb-4">
          <div className="container flex flex-col gap-4 mx-auto">
            <Heading level={3}>2. Cross-Ministry Hiring Program (CMHP)</Heading>
            <p>
              Our team supports this service, which benefits many ministries at the same time. This option supports
              building agile teams by hiring permanent digital talent, such as a cross-government competition for an
              Information Systems 24.
            </p>
            <p>Top benefits we’ve heard about from hiring managers we’ve worked with:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Left */}
              <div className="flex flex-row gap-4">
                <div className="shrink-0">
                  <Icon icon="GraduationCap" />
                </div>
                <div className="grow">Leverage subject matter experts on digital roles</div>
              </div>
              {/* Middle */}
              <div className="flex flex-row gap-4">
                <div className="shrink-0">
                  <Icon icon="Zap" />
                </div>
                <div className="grow">Hire qualified candidates faster (estimated 6 weeks)</div>
              </div>
              {/* Right */}
              <div className="flex flex-row gap-4">
                <div className="shrink-0">
                  <Icon icon="Inbox" />
                </div>
                <div className="grow">DTAD handles administrative processes</div>
              </div>
            </div>
            <Link href="/learn/hiring-managers/cross-ministry-hiring">
              <Button className="text-lg w-full md:w-72" variant="call-to-action">
                <span className="text-bold">Cross-Ministry Hiring overview</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="container flex flex-col gap-4 mx-auto mb-4">
          <Heading level={3}>3. Eligibility Lists</Heading>
          <p>
            An Eligibility List is a list of candidates who are pre-qualified. This means they interviewed and passed
            with a high score, but were not a top candidate.
          </p>
          <p>
            To save time and resources, hiring managers can hire these candidates immediately. The timeframe varies from
            3 months to 1 year. If candidates decline 2 times, they are removed from the list.
          </p>
          <Button className="text-lg w-full md:w-72" variant="outline">
            Sign up for notifications
          </Button>
        </div>
      </div>
    </div>
  );
}
