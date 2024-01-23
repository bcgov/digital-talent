/* eslint-disable no-nested-ternary */
import dayjs from 'dayjs';
// import Card from '../../card.component';

import { Card } from '../../card.component';
import Heading from '../../heading.component';

type Competition = {
  id: string;
  form_url: string;
  classification: string;
  requisition: string;
  opportunity_submission_period: [string, string];
  application_submission_period: [string, string];
};

type CompetitionCardProps = {
  competition: Competition;
};

function BaseCard({ competition, closed }: CompetitionCardProps & { closed: boolean }) {
  return (
    <Card className="ring-bcgov-blue-dark shadow-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-bcgov-blue-dark">{competition.classification}</span>
          <div>
            <span>{`REQ: `}</span>
            <i className="inline">{competition.requisition}</i>
          </div>
          <span>
            Anticipated Posting Date: {dayjs(competition.application_submission_period[0]).format('MMM D, YYYY')}
          </span>
        </div>
        <div className="py-2 md:py-0 text-start md:text-end my-0 md:my-auto">
          {closed === true && (
            <>
              <span className="font-bold">Closed for signups</span>
              <br />
            </>
          )}
          <span className="font-bold">
            Deadline to join{closed === true ? ' was' : ''}:{' '}
            {dayjs(competition.opportunity_submission_period[1]).format('MMM D, YYYY')}
            {/* todo: for some reason this doesn't render correct date */}
            {/* {dayjs(competition.opportunity_submission_period[1]).format('MMM D, YYYY')} */}
          </span>
        </div>
      </div>
    </Card>
  );
}

function CompetitionCard({ competition }: CompetitionCardProps) {
  const competitionHasClosed = dayjs().isAfter(dayjs(competition.opportunity_submission_period[1]));

  return competition.form_url !== '/' ? (
    competitionHasClosed === false ? (
      <a href={competition.form_url} rel="noreferrer" target="_blank">
        <BaseCard closed={competitionHasClosed} competition={competition} />
      </a>
    ) : (
      <BaseCard closed={competitionHasClosed} competition={competition} />
    )
  ) : (
    <div />
  );
}

const competitions: Competition[] = [
  {
    id: '0',
    form_url: 'https://submit.digital.gov.bc.ca/app/form/submit?f=25b4aed3-fb14-495f-9c13-36e48e6f196a',
    classification: 'Full Stack Developer (IS 27)',
    requisition: '102862',
    opportunity_submission_period: ['2023-06-01T16:00:00Z', '2023-07-21T06:59:59.999Z'],
    application_submission_period: ['2023-08-11T16:00:00Z', '2023-07-07T06:59:59.999Z'],
  },
  {
    id: '1',
    form_url: 'https://submit.digital.gov.bc.ca/app/form/submit?f=af4a3ed7-de98-4403-868d-3257354a2529',
    classification: 'Senior Scrum Master (IS 27)',
    requisition: '102863',
    opportunity_submission_period: ['2023-06-01T16:00:00Z', '2023-07-21T06:59:59.999Z'],
    application_submission_period: ['2023-08-11T16:00:00Z', '2023-07-07T06:59:59.999Z'],
  },
  {
    id: '2',
    form_url: 'https://submit.digital.gov.bc.ca/app/form/submit?f=cd363b50-6cbc-4f3f-bf65-6228407de78f',
    classification: 'Senior Product Manager (Band 3)',
    requisition: '108091',
    opportunity_submission_period: ['2024-01-22T17:30:00Z', '2024-02-02T07:59:59.999Z'],
    application_submission_period: ['2024-02-09T16:00:00Z', '2024-02-25T07:59:59.999Z'],
  },
];

export default function CompetitionList() {
  const upcomingCompetitions = competitions.filter((competition: Competition) =>
    dayjs().isBefore(dayjs(competition.opportunity_submission_period[0])),
  );

  const currentCompetitions = competitions.filter((competition: Competition) => {
    return (
      dayjs().isAfter(dayjs(competition.opportunity_submission_period[0])) &&
      dayjs().isBefore(dayjs(competition.opportunity_submission_period[1]))
    );
  });

  const previousCompetitions = competitions.filter((competition: Competition) =>
    dayjs().isAfter(dayjs(competition.opportunity_submission_period[1])),
  );

  return (
    <>
      <p className="my-2 mb-4">
        Selecting one of the options below sends hiring managers to our Hiring Intake form. Hiring managers should be
        ready to sign our Service Agreement.
      </p>
      {currentCompetitions.length > 0 && (
        <>
          <Heading className="text-bcgov-blue-dark" level={2}>
            Current competitions
          </Heading>
          <div className="flex flex-col gap-6 text-lg mt-2 mb-12">
            {currentCompetitions.map((competition: Competition) => (
              <CompetitionCard competition={competition} key={competition.id} />
            ))}
          </div>
        </>
      )}

      <div>
        <Heading className="text-bcgov-blue-dark" level={2}>
          Upcoming competitions
        </Heading>
        {upcomingCompetitions.length > 0 ? (
          <div className="flex flex-col gap-6 text-lg mt-2 mb-12">
            {previousCompetitions.map((competition: Competition) => (
              <CompetitionCard competition={competition} key={competition.id} />
            ))}
          </div>
        ) : (
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
        )}
      </div>
      {previousCompetitions.length > 0 && (
        <>
          <Heading className="text-bcgov-blue-dark" level={2}>
            Previous competitions
          </Heading>
          <div className="flex flex-col gap-6 text-lg mt-2 mb-12">
            {previousCompetitions.map((competition: Competition) => (
              <CompetitionCard competition={competition} key={competition.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
