import { Mailbox } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import aboutDtadImage from '../../../common/components/hiring-managers/svgs/about-dtad.svg';
import joinCmhCompetitionImage from '../../../common/components/hiring-managers/svgs/join-cmh-competition.svg';
import learnAboutOurServicesImage from '../../../common/components/hiring-managers/svgs/learn-about-our-services.svg';
import { Card, CardContent, CardHeader } from '../../../common/components/ui/card.component';
import Heading from '../../../common/components/ui/heading.component';
import Hero from '../../../common/components/ui/hero/hero.component';
import { wrapTitle } from '../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Hiring Managers'),
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <Hero
        description="Our team builds Agile teams with a modernized Digital Talent hiring service: the Cross-Ministry Hiring Program (CMHP)."
        title="Digital Talent at BC Govt"
      />
      <div className="flex flex-col gap-8">
        {/* Card Grid */}
        <div className="container hidden md:flex flex-row gap-4">
          {/* Join a Cross-Ministry Hiring Competition */}
          <div className="w-1/3">
            <Link href="/hiring-managers/cross-ministry-hiring">
              <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg ">
                <CardHeader className="px-8 py-2">
                  <Image
                    priority
                    alt="Join a cross-ministry hiring competition"
                    className="mx-auto"
                    src={joinCmhCompetitionImage}
                  />
                </CardHeader>
                <CardContent className="h-fill">
                  <div className="my-auto">
                    <h2 className="text-2xl">Join a cross-ministry hiring competition</h2>
                    <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                    <span>Our upcoming hiring is for IS27s and AO24s. View details and sign up.</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="w-2/3">
            <div className="flex flex-col gap-4 h-full">
              {/* Learn about our services */}
              <div className="h-1/2">
                <Link href="/learn/hiring-managers/cross-ministry-hiring">
                  <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg">
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
                          <h2 className="text-2xl">The Cross-Ministry Hiring Program.</h2>
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
                <Link href="/learn/hiring-managers/about-digital-talent">
                  <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg">
                    <div className="flex flex-row gap-4 h-full">
                      <CardContent className="flex w-2/3 pl-4 py-2">
                        <div className="mx-auto">
                          <h2 className="text-2xl">About our Team</h2>
                          <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                          <span>Get to know us better and what motivates us. </span>
                        </div>
                      </CardContent>
                      <div className="flex w-1/3">
                        <Image
                          priority
                          alt="About the Digital Talent Attraction & Develpment team"
                          className="mx-auto my-auto p-2 gap-1.5"
                          src={aboutDtadImage}
                        />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-4 md:hidden">
          <Link href="/hiring-managers/cross-ministry-hiring">
            <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg">
              <div className="flex flex-row gap-4 h-full">
                <div className="flex w-1/3">
                  <Image
                    priority
                    alt="Join a cross-ministry hiring competition"
                    className="mx-auto my-auto p-2 gap-1.5"
                    src={joinCmhCompetitionImage}
                  />
                </div>
                <CardContent className="flex w-2/3 pl-0 pr-2 py-2">
                  <div className="mx-auto">
                    <h2 className="text-2xl">Join a cross-ministry hiring competition</h2>
                    <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                    <span>Our upcoming hiring is for IS27s and AO24s. View details and sign up.</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
          <Link href="/learn/hiring-managers/cross-ministry-hiring">
            <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg">
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

          <Link href="/learn/hiring-managers/about-digital-talent">
            <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg">
              <div className="flex flex-row gap-4 h-full">
                <div className="flex w-1/3">
                  <Image
                    priority
                    alt="About the Digital Talent Attraction & Develpment team"
                    className="mx-auto my-auto p-2 gap-1.5"
                    src={aboutDtadImage}
                  />
                </div>
                <CardContent className="flex w-2/3 pl-4 py-2">
                  <div className="mx-auto">
                    <h2 className="text-2xl">About our Team</h2>
                    <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                    <span>Get to know us better and what motivates us.</span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>

        {/* Blue Banner */}
        <div className="bg-bcgov-blue-light py-8 mb-8">
          <div className="container mx-auto">
            <Heading className="mb-4" level={2}>
              Welcome! We look forward to working together!
            </Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <p>
                  Welcome to the homepage for the Digital Talent Attraction and Development Team! This website serves as a hub 
                  of our hiring programs and pilots, current and upcoming hiring, and who we are.
                </p>
                <p>
                  Our team works with Agile principles, inclusive of product iterations. Please expect updates as the team gets feedback from users. 
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
                  <li>Process for online approvals to use Digital Talent Job Profiles.</li>
                  <li>Process for suggesting Job Profiles to our inventory.</li>
                  <li>Overview of Advisory services of organization design and development for Agile teams.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
