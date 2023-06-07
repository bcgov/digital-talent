import SplitCallToAction from '../../common/components/ui/call-to-action/split-call-to-action.component';
import Hero from '../../common/components/ui/hero/hero.component';

export default function Page() {
  return (
    <>
      <Hero
        description="Learn about Roles & Opportunities in the BC Public Service"
        title="Digital Talent in the BC Public Service"
        variant="light"
      />
      <SplitCallToAction
        primary={{
          title: 'Cross-Ministry Hiring',
          description: 'As a hiring manager, find guidance here to set your team up for successful outcomes.',
          button: {
            text: 'Get Started',
            href: '/hiring-managers/cross-ministry-hiring',
          },
        }}
        secondary={{
          title: 'Request a Digital Talent Job Profile',
          description: 'As a hiring manager, get a job profile that suits your vacancy.',
          button: {
            text: 'Request a Job Profile',
            href: 'https://submit.digital.gov.bc.ca/app/form/submit?f=a6ca83a2-71a3-4b4b-9acc-0b7f5723dede',
          },
        }}
      />
    </>
  );
}
