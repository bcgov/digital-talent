import { Mailbox } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import learnAboutOurServicesImage from '../../../../../../common/components/hiring-managers/svgs/learn-about-our-services.svg';
import Link from '../../../../../../common/components/link.component';
import { Card, CardContent, CardHeader } from '../../../../../../common/components/ui/card.component';
import Heading from '../../../../../../common/components/ui/heading.component';
import Hero from '../../../../../../common/components/ui/hero/hero.component';
import CompetitionList from '../../../../../../common/components/ui/hiring-manager/competition-list/competition-list.component';
import { IconList, IconListItem } from '../../../../../../common/libs/markdoc/components/tags/icon-list';

import { wrapTitle } from '../../../../../../common/utils/wrap-title.util';

export const metadata: Metadata = {
  title: wrapTitle('Apply for an upcoming competition'),
};

export default function Page() {
  return (
    <>
      <Hero title="Apply for an upcoming competition" variant="section-heading" />
      <div className="flex flex-col">
        <div className="container flex flex-col mx-auto">
          <Heading className="text-bcgov-blue-dark" level={2}>
            Consider joining us for the competitions below!
          </Heading>

          <p className="my-2">
            Selecting one of the options below sends hiring managers to our Hiring Intake form. Hiring managers should
            be ready to sign our Service Agreement.
          </p>
          <div className="rounded-sm border bg-gray-50 text-card-foreground shadow-sm mt-6 mb-8 p-4">
            <span className="text-lg">No upcoming competitions</span>
            <p className="pt-2">
              Unfortunately there are no competitions to join at this time. Though the deadline for our open
              competitions have passed, we are happy to connect and discuss the Cross-Ministry Hiring Program. Send us
              an email at{' '}
              <a className="text-bcgov-blue-dark underline" href="mailto:digital.talent@gov.bc.ca">
                digital.talent@gov.bc.ca
              </a>
              .
            </p>
          </div>
          <Heading className="text-bcgov-blue-dark" level={2}>
            Open competitions
          </Heading>
          <CompetitionList />
        </div>
        <div className="bg-bcgov-blue-light py-6 mb-10">
          <div className="container flex flex-col gap-4 mx-auto">
            <Heading className="text-bcgov-blue-dark" level={2}>
              Don't see what you're looking for?
            </Heading>
            <ul>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <Link href="/hiring-managers/hiring-options/cross-ministry-hiring">
                    Cross-Ministry Hiring Program
                  </Link>
                  . Great source of information for hiring managers who want to join CMHP.
                </span>
              </li>
              <li className="flex flex-row gap-2">
                <span className="text-bcgov-blue-dark">→</span>
                <span>
                  <Link href="/about-digital-talent">About our team</Link>. Learn about our team and our passion.
                </span>
              </li>
            </ul>
            <Heading level={3}>Positions we hire for</Heading>
            <p>
              Digital Talent (DT) are roles in the BC Public Service focus on designing, developing, and deploying
              digital products and/or services.
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
            <div className="flex flex-row gap-2 mt-2">
              <Mailbox /> <span className="font-bold">Have questions?</span>{' '}
              <a className="text-bcgov-blue-dark underline" href="mailto:digital.talent@gov.bc.ca">
                digital.talent@gov.bc.ca
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto mb-4">
          <Heading level={2}>Process overview</Heading>
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
                    We match candidates with opportunities
                  </IconListItem>
                  <IconListItem color="#FFFFFF" icon="6" iconBgColor="bg-bcgov-blue-dark" iconColor="text-white">
                    Offers
                  </IconListItem>
                </div>
              </IconList>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="hidden md:flex">
                <Link href="/hiring-managers/hiring-options/cross-ministry-hiring">
                  <Card className="h-full shadow-md hover:ring-1 hover:ring-bcgov-blue-dark hover:shadow-xl ">
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
                        <h2 className="text-2xl">The Cross-Ministry Hiring Program</h2>
                        <hr className="bg-bcgov-blue-dark h-1 w-4 my-2" />
                        <span>Understand the process and details of our featured program.</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              <div className="flex md:hidden">
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
        </div>
      </div>
    </>
  );
}
