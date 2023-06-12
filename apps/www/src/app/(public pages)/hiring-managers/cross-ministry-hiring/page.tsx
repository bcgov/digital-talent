import Link from 'next/link';
import Heading from '../../../../common/components/ui/heading.component';
import Hero from '../../../../common/components/ui/hero/hero.component';
import CompetitionList from '../../../../common/components/ui/hiring-manager/competition-list/competition-list.component';

export default function Page() {
  return (
    <>
      <Hero title="Sign Up for Cross-Ministry Hiring" variant="light" />
      <div className="container mx-auto flex flex-col gap-4 mb-4">
        <Heading className="text-bcgov-gray-dark my-8" level={1}>
          Which hiring are you interested in joining?
        </Heading>

        <CompetitionList />
      </div>
      <div className="p-4 bg-bcgov-blue-light">
        <div className="container mx-auto">
          <span className="font-bold">Don't see what you're looking for?</span>
          <div className="prose max-w-none">
            <p>
              This form is for those interested in joining Cross-Ministry Hiring only.
              <br />
              Many questions can be answered on this website, like:
            </p>
            <ul>
              <li>
                <Link className="text-blue-500" href="/learn/hiring-managers/cross-ministry-hiring">
                  Cross-Ministry Hiring
                </Link>
                , including expectations for Hiring Managers
              </li>
              <li>
                <Link
                  href="/learn/hiring-managers/about-digital-talent"
                  className="text-blue-500
                "
                >
                  About our team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
