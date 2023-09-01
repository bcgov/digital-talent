import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import Link from '../../../../common/components/link.component';
import { Button } from '../../../../common/components/ui/button';
import Heading from '../../../../common/components/ui/heading.component';
import Hero from '../../../../common/components/ui/hero/hero.component';
import { Icon } from '../../../../common/components/ui/icon.component';
import { wrapTitle } from '../../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Hiring options in BC Public Service'),
};

export default function Page() {
  return (
    <div>
      <Hero title="Hiring options for Digital Talent" variant="section-heading" />
      <div className="flex flex-col">
        <div className="container flex flex-col gap-4 mb-12">
          <p>
            We define Digital Talent (DT) as roles in the BC Public Service that focus on designing, developing, and
            deploying digital products and/or services.
          </p>
          <p>
            Hiring managers have three options for hiring staff. Each option gets support from either our team, the
            Digital Talent Careers Team (DTC), or guidance from the Public Service Agency (PSA).
          </p>
        </div>

        {/* 3 box banner */}
        <div className="bg-bcgov-blue-light py-10">
          <div className="container flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <Link className="bg-white p-4 text-[1.8rem] flex flex-col rounded-md border hover:shadow-xl" href="#cmhp">
                <div>
                  <div className="grow text-bcgov-blue-dark mb-2 font-semibold text-2xl leading-8">
                    The Cross-Ministry Hiring Program
                  </div>
                  <div className="font-bold text-base text-bcgov-blue-dark">with the DTC</div>
                </div>
              </Link>

              <Link
                className="bg-white p-4 text-[1.8rem] flex flex-col rounded-md border hover:shadow-xl"
                href="#eligibility-lists"
              >
                <div>
                  <div className="grow text-bcgov-blue-dark mb-2 font-semibold text-2xl leading-8">
                    Access Eligibility Lists
                  </div>
                  <div className="font-bold text-base text-bcgov-blue-dark">with the DTC</div>
                </div>
              </Link>

              <Link
                className="bg-white p-4 text-[1.8rem] flex flex-col rounded-md border hover:shadow-xl"
                href="#self-run"
              >
                <div>
                  <div className="grow text-bcgov-blue-dark leading-8 mb-2 font-semibold text-2xl leading-8">
                    Self-run hiring
                  </div>
                  <div className="font-bold text-base text-bcgov-blue-dark">with the PSA</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-4 mx-auto mt-8 mb-12">
          <Heading id="cmhp" level={3}>
            Cross-Ministry Hiring Program (CMHP)
          </Heading>
          <p>
            The CMHP helps many ministries at the same time. After filling in our Intake Form, our team offers
            recruitment services, such as job profile marketing and guiding candidates. This option only hires for
            permanent positions.
          </p>
          <p>Top benefits we’ve heard about from hiring managers we’ve worked with:</p>
          <div className="my-4 space-y-4 md:flex md:space-y-0 md:space-x-4">
            {/* Left */}
            <div className="flex items-center space-x-4">
              <div className="">
                <Icon icon="GraduationCap" />
              </div>
              <div>Leverage subject matter experts on digital roles</div>
            </div>
            {/* Middle */}
            <div className="flex items-center space-x-4">
              <div className="">
                <Icon icon="Zap" />
              </div>
              <div>Hire qualified candidates faster (estimated 6 weeks)</div>
            </div>
            {/* Right */}
            <div className="flex items-center space-x-4">
              <div className="">
                <Icon icon="ListChecks" />
              </div>
              <div>DTC handles administrative processes</div>
            </div>
          </div>
          <Link href="/hiring-managers/hiring-options/cross-ministry-hiring">
            <Button className="text-lg w-full md:w-72" variant="default">
              <span className="text-bold">Cross-Ministry Hiring overview</span>
            </Button>
          </Link>
        </div>

        <div className="container flex flex-col gap-4 mx-auto mb-12">
          <Heading id="eligibility-lists" level={3}>
            Access Eligibility Lists
          </Heading>
          <p>
            Our team creates Eligibility Lists (E-lists) that have pre-qualified candidates. E-lists are the outcome of
            the CMHP. Hiring managers across BC Public Service can get access to our E-lists to save time and resources.
          </p>
          <p>
            This reduces candidates' time too because they do not need to spend hours applying to similar positions. The
            candidates’ hiring experience with our organization improves.
          </p>
          <p>
            {/* Generated with https://www.sender.net/mailto-link-generator/ */}
            If you need immediate access, please contact our team at{' '}
            <a
              className="text-bcgov-blue-dark underline"
              href="mailto:digital.talent@gov.bc.ca?subject=Request%20to%20access%20E-%20List%3A%C2%A0%3CJob%20Profile%20Title%3E&body=Hello%2C%20I%20would%20like%20to%20access%20an%20eligibility%20list%20for%20%3CJob%20Profile%3E%2C%C2%A0please%20confirm%20if%20you%20have%20a%20current%20and%20active%20list."
            >
              digital.talent@gov.bc.ca
            </a>
            .
          </p>
        </div>

        <div className="container flex flex-col gap-4 mx-auto mb-12">
          <Heading id="self-run" level={3}>
            Self-run hiring
          </Heading>
          <p>
            This option offers hiring managers the opportunity to manage a competition on their own. Hiring managers
            receive guidance from the PSA and resources can be found on PSA's myHR website.
          </p>
          <p>Benefits:</p>
          <div className="mt-4 space-y-4 md:flex md:space-y-0 md:space-x-4">
            {/* Left */}
            <div className="flex items-center space-x-4">
              <div className="">
                <Icon icon="GraduationCap" />
              </div>
              <div>Full control over the schedule, requirements, and final candidates</div>
            </div>
            {/* Right */}
            <div className="flex items-center space-x-4">
              <div className="">
                <Icon icon="Zap" />
              </div>
              <div>Available for all job types (eg. Temporary Appointments, non-digital talent roles)</div>
            </div>
          </div>

          {/* <div className="flex flex-row gap-2 mt-4">
            <Mailbox /> <span className="font-bold">Have questions?</span>{' '}
            <a className="text-bcgov-blue-dark underline" href="mailto:digital.talent@gov.bc.ca">
              digital.talent@gov.bc.ca
            </a>
          </div> */}

          <div className="flex flex-col md:flex-row md:space-x-4 w-full">
            <div className="mt-4">
              <Link href="/hiring-managers/request-approval-to-use-job-profiles">
                {/*  */}
                <Button className="text-sm w-full md:w-88" variant="default">
                  Use Digital Talent job profiles to hire
                </Button>
              </Link>
            </div>

            <div className="mt-4">
              <Link href="https://www2.gov.bc.ca/gov/content/careers-myhr/hiring-managers">
                <Button className="text-lg w-full md:w-72" variant="outline">
                  myHR Hiring resources <ExternalLink className="w-5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-8">
          <div className="container flex flex-col gap-4 mx-auto mb-6">
            <Heading level={3}>Compare hiring options</Heading>
            <div className="overflow-auto">
              <table className="table-auto w-full bg-white mt-3">
                <thead className="bg-bcgov-blue-dark text-white">
                  <tr>
                    <th className="px-4 py-2" />
                    <th className="px-4 py-2">CMHP</th>
                    <th className="px-4 py-2">Self-run</th>
                    <th className="px-4 py-2">E-list</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-bold">Best for</td>
                    <td className="border px-4 py-2">Hiring digital talent quickly</td>
                    <td className="border px-4 py-2">Hiring specific skillsets and full involvement</td>
                    <td className="border px-4 py-2">Hiring pre-qualified candidates</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2 font-bold">Appointments supported</td>
                    <td className="border px-4 py-2">Full-time Digital Talent</td>
                    <td className="border px-4 py-2">Any</td>
                    <td className="border px-4 py-2">Full-time Digital Talent</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2 font-bold">Involvement</td>
                    <td className="border px-4 py-2">2 options for time commitments: low and high</td>
                    <td className="border px-4 py-2">High time commitment</td>
                    <td className="border px-4 py-2">Low time commitment</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2 font-bold">Completion</td>
                    <td className="border px-4 py-2">Expected 7 weeks from posting to offer</td>
                    <td className="border px-4 py-2">Dependent on hiring team's capacity</td>
                    <td className="border px-4 py-2">Immediately</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2 font-bold">Support</td>
                    <td className="border px-4 py-2">
                      Full administrative support, marketing and SME support during process
                    </td>
                    <td className="border px-4 py-2">PSA or SHR, and marketing support for digital talent roles</td>
                    <td className="border px-4 py-2">N/A</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2 font-bold">Flexibility</td>
                    <td className="border px-4 py-2">Shared job profile with other ministries</td>
                    <td className="border px-4 py-2">Full control of job requirements and posting</td>
                    <td className="border px-4 py-2">Order of ranking</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2 font-bold">Cost</td>
                    <td className="border px-4 py-2">N/A</td>
                    <td className="border px-4 py-2">N/A</td>
                    <td className="border px-4 py-2">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
