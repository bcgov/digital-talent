import { Mailbox } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import compareHiringServicesImage from '../../../common/components/hiring-managers/svgs/compare-hiring-services.svg';
import joinCmhCompetitionImage from '../../../common/components/hiring-managers/svgs/join-cmh-competition.svg';
import learnAboutOurServicesImage from '../../../common/components/hiring-managers/svgs/learn-about-our-services.svg';
import { Card, CardContent, CardHeader } from '../../../common/components/ui/card.component';
import Heading from '../../../common/components/ui/heading.component';
import Hero from '../../../common/components/ui/hero/hero.component';
import { wrapTitle } from '../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Digital Talent'),
  description: 'Learn and join specialized programs to hire digital talent in the BC Public Service',
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero
        description="Our team builds Agile teams with a modernized Digital Talent hiring service: the Cross-Ministry Hiring Program (CMHP)."
        title="Digital Talent in the BC Public Service"
        variant="bc-gov"
      />
      <div className="flex flex-col">
        {/* Card Grid */}
        <div className="container hidden md:flex flex-row gap-6 mb-14">
          {/* Apply for an upcoming competition */}
          <div className="w-1/3">
            <Link href="/hiring-managers/hiring-options/cross-ministry-hiring/apply">
              <Card className="h-full shadow-md hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-xl ">
                <CardHeader className="px-8 py-2">
                  <Image
                    priority
                    alt="Apply for an upcoming competition"
                    className="mx-auto"
                    src={joinCmhCompetitionImage}
                  />
                </CardHeader>
                <CardContent className="h-fill">
                  <div className="my-auto">
                    <h2 className="text-2xl">Apply for an upcoming competition</h2>
                    <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                    <span>Fill out our Hiring Intake form if an upcoming competition works for your team.</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="w-2/3">
            <div className="flex flex-col gap-6 h-full">
              {/* Learn about our services */}
              <div className="h-1/2">
                <Link href="/hiring-managers/hiring-options/cross-ministry-hiring">
                  <Card className="h-full shadow-md hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-xl">
                    <div className="flex flex-row gap-4 h-full">
                      <div className="flex w-1/3">
                        <Image
                          priority
                          alt="Learn about our services"
                          className="mx-auto my-auto p-2 gap-1.5"
                          src={learnAboutOurServicesImage}
                        />
                      </div>
                      <CardContent className="flex w-2/3 pl-0 pr-2 py-2">
                        <div className="mx-auto">
                          <h2 className="text-2xl">The Cross-Ministry Hiring Program</h2>
                          <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                          <span>Understand the process and details of our featured program.</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>
              {/* About the Digital Talent Attraction & Development Team */}
              <div className="h-1/2">
                <Link href="/hiring-managers/hiring-options">
                  <Card className="h-full shadow-md hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-xl">
                    <div className="flex flex-row gap-4 h-full">
                      <CardContent className="flex w-2/3 pl-4 py-2">
                        <div className="mx-auto">
                          <h2 className="text-2xl">Compare hiring services</h2>
                          <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                          <span>Explore the different services available for digital talent positions.</span>
                        </div>
                      </CardContent>
                      <div className="flex w-1/3">
                        <Image
                          priority
                          alt="Compare hiring services"
                          className="mx-auto my-auto p-2 gap-1.5"
                          src={compareHiringServicesImage}
                        />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-4 md:hidden mb-10">
          <Link href="/hiring-managers/hiring-options/cross-ministry-hiring/apply">
            <Card className="h-full shadow-md hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-xl">
              <div className="flex flex-row gap-4 h-full">
                <div className="flex w-1/3">
                  <Image
                    priority
                    alt="Apply for an upcoming competition"
                    className="mx-auto my-auto p-2 gap-1.5"
                    src={joinCmhCompetitionImage}
                  />
                </div>
                <CardContent className="flex w-2/3 pl-0 pr-2 py-2">
                  <div className="mx-auto">
                    <h2 className="text-2xl">Apply for an upcoming competition</h2>
                    <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                    <span>Fill out our Hiring Intake form if an upcoming competition works for your team. </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
          <Link href="/hiring-managers/hiring-options/cross-ministry-hiring">
            <Card className="h-full shadow-md hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-xl">
              <div className="flex flex-row gap-4 h-full">
                <div className="flex w-1/3">
                  <Image
                    priority
                    alt="Learn about our services"
                    className="mx-auto my-auto p-2 gap-1.5"
                    src={learnAboutOurServicesImage}
                  />
                </div>
                <CardContent className="flex w-2/3 pl-0 pr-2 py-2">
                  <div className="mx-auto">
                    <h2 className="text-2xl">The Cross-Ministry Hiring Program</h2>
                    <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                    <span>Understand the process and details of our featured program.</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>

          <Link href="/hiring-managers/hiring-options">
            <Card className="h-full shadow-md hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-xl">
              <div className="flex flex-row gap-4 h-full">
                <div className="flex w-1/3">
                  <Image
                    priority
                    alt="Compare hiring services"
                    className="mx-auto my-auto p-2 gap-1.5"
                    src={compareHiringServicesImage}
                  />
                </div>
                <CardContent className="flex w-2/3 pl-4 py-2">
                  <div className="mx-auto">
                    <h2 className="text-2xl">Compare hiring services</h2>
                    <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                    <span>Explore the different services available for digital talent positions.</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>

        {/* Blue Banner */}
        <div className="bg-bcgov-blue-light py-8">
          <div className="container mx-auto">
            <Heading className="mb-4" level={2}>
              Welcome! We look forward to working together!
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <p>
                  Welcome to the new home for the Digital Talent Careers Team (DTC). You can learn about hiring options,
                  join pilot programs, and discover what we’re working on.
                </p>
                <p>
                  We work in an agile environment, so please expect changes on this website as we grow and publish more
                  information.
                </p>
                <div className="flex flex-row gap-2 mt-4">
                  <Mailbox /> <span className="font-bold">Have questions?</span>{' '}
                  <a className="text-bcgov-blue-dark underline" href="mailto:digital.talent@gov.bc.ca">
                    digital.talent@gov.bc.ca
                  </a>
                </div>
              </div>
              <div>
                <span className="font-bold">Coming soon:</span>
                <ul className="list-disc ml-8">
                  <li>Process for using Eligibilty Lists from the Cross-Ministry Hiring Program</li>
                  <li>Process for suggesting Job Profiles to our inventory.</li>
                  <li>Overview of Advisory services of organization design and development for Agile teams.</li>
                  <li>Competition Calendar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
