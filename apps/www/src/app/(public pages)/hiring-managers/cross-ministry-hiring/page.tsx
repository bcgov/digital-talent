import { Metadata } from 'next';
import Image from 'next/image';
import learnAboutOurServicesImage from '../../../../common/components/hiring-managers/svgs/learn-about-our-services.svg';
import Link from '../../../../common/components/link.component';
import { Card, CardContent, CardHeader } from '../../../../common/components/ui/card.component';
import Heading from '../../../../common/components/ui/heading.component';
import Hero from '../../../../common/components/ui/hero/hero.component';
import CompetitionList from '../../../../common/components/ui/hiring-manager/competition-list/competition-list.component';
import { IconList, IconListItem } from '../../../../common/libs/markdoc/components/tags/icon-list';

import { wrapTitle } from '../../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Join a Cross-Ministry Hiring (CMH)'),
};

export default function Page() {
  return (
    <>
      <Hero title="Join a Cross-Ministry Hiring (CMH)" variant="section-heading" />
      <div className="flex flex-col gap-4">
        <div className="container flex flex-col gap-4 mx-auto">
          <Heading level={2}>Sign up for one of our upcoming competitions.</Heading>
          <p>
            Select a competition below to start our intake form. Hiring managers should be ready to sign our{' '}
            <span className="text-blue-500 underline">
              <Link href="https://bcgov.sharepoint.com/:w:/r/teams/00109-DigitalTalentAttractionandDevelopmentTeam/Shared%20Documents/Digital%20Talent%20Attraction%20and%20Development%20Team/20230704%20-%20Cross-Ministry%20Hiring%20-%20Service%20Agreement.docx?d=w3e18227237d340eb90d54e7ff354971e&csf=1&web=1&e=AHRiWf">
                Service Agreement
              </Link>
            </span>
            .
          </p>
          <CompetitionList />
        </div>
        <div className="bg-bcgov-blue-light py-6">
          <div className="container flex flex-col gap-4 mx-auto">
            <Heading level={2}>Don't see what you're looking for?</Heading>
            <ul>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <Link href="/learn/hiring-managers/cross-ministry-hiring">Cross-Ministry Hiring</Link>. Great source
                  of information for hiring managers new to CMH.
                </span>
              </li>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <Link href="/learn/hiring-managers/about-digital-talent">About our team</Link>. Learn about our team
                  and our passion.
                </span>
              </li>
            </ul>
            <Heading level={3}>Positions we hire for</Heading>
            <p>We offer hiring services for:</p>
            <ul className="list list-disc ml-6">
              <li>Developers (Information Systems 18 to 30)</li>
              <li>Dev Ops Specialists (Information Systems 27)</li>
              <li>Product Manager (Information Systems 30, and Band 3)</li>
              <li>Scrum Master (Information Systems 24 and 27)</li>
              <li>Site Reliability Specialist (Information Systems 27 and 30)</li>
              <li>User Experience Designer (Information Systems 24 and 27)</li>
              <li>Users Experience Researcher (Administration Officer 24 and 27)</li>
            </ul>
            <p>
              The{' '}
              <span className="text-blue-500 underline">
                <Link href="https://www2.gov.bc.ca/gov/content/careers-myhr/all-employees/pay-benefits/salaries/salarylookuptool">
                  salary look up tool
                </Link>
              </span>{' '}
              helps with forecasting and budgeting for these classifications.
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-4">
          <Heading level={2}>Cross-Ministry Hiring process</Heading>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8">
              <IconList>
                <div className="flex flex-col gap-4 py-4">
                  <IconListItem color="#FFFFFF" icon="1" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Join an upcoming competition
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="2" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    We create a job posting
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="3" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Candidates apply
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="4" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Assess and interview candidates
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="5" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    We match candidates to opportunities
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="6" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Offers
                  </IconListItem>
                </div>
              </IconList>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="hidden md:flex">
                <Link href="/learn/hiring-managers/cross-ministry-hiring">
                  <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg ">
                    <CardHeader className="px-8 py-2">
                      <Image
                        priority
                        alt="Learn about our services"
                        className="mx-auto"
                        src={learnAboutOurServicesImage}
                      />
                    </CardHeader>
                    <CardContent className="h-fill">
                      <div className="my-auto">
                        <h2 className="text-2xl">Learn about our services</h2>
                        <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                        <span>More about how we run cross-ministry hiring for digital talent</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              <div className="flex md:hidden">
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
                          <h2 className="text-2xl">Learn about our services</h2>
                          <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                          <span>More about how we run cross-ministry hiring for digital talent</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row">
            <div className="font-bold w-2/3">
              <IconList>
                <div className="flex flex-col gap-4 py-4">
                  <IconListItem color="#FFFFFF" icon="1" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Join an upcoming competition
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="2" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    We create a job posting
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="3" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Candidates apply
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="4" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Assess and interview candidates
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="5" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    We match candidates to opportunities
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="6" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Offers
                  </IconListItem>
                </div>
              </IconList>
            </div>
            <div className="w-1/3 md:hidden">
              <Link href="/hiring-managers/cross-ministry-hiring">
                <Card className="h-full shadow-[0_0.25rem_0_0_rgba(0,0,0,0.1)] hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-lg ">
                  <CardHeader className="px-8 py-2">
                    <Image
                      priority
                      alt="Join a cross-ministry hiring competition"
                      className="mx-auto"
                      src={learnAboutOurServicesImage}
                    />
                  </CardHeader>
                  <CardContent className="h-fill">
                    <div className="my-auto">
                      <h2 className="text-2xl">Join a cross-ministry hiring competition</h2>
                      <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                      <span>View and sign up for current cross-ministry hiring competitions</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
