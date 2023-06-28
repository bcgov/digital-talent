import dayjs from 'dayjs';
// import Card from '../../card.component';

import { Card } from '../../card.component';

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

function CompetitionCard({ competition }: CompetitionCardProps) {
  return competition.form_url !== '/' ? (
    <a href={competition.form_url} rel="noreferrer" target="_blank">
      <Card className="hover:ring-1 ring-bcgov-blue-dark shadow-md hover:shadow-xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-bcgov-blue-dark">{competition.classification}</span>
            <div><span>{`REQ: `}</span><i className="inline">{competition.requisition}</i></div>
            <span>Anticipated Posting Date: {dayjs(competition.application_submission_period[0]).format('MMM D, YYYY')}</span>
          </div>
          <div className="py-2 md:py-0 text-start md:text-end my-0 md:my-auto">
            Deadline to join:
            <br />
            <span className="font-bold">
              July 21, 2023
              {/* todo: for some reason this doesn't render correct date */}
              {/* {dayjs(competition.opportunity_submission_period[1]).format('MMM D, YYYY')} */}
            </span>
          </div>
        </div>
      </Card>
    </a>
  ) : (
    <></>
    // <Card className="ring-bcgov-blue-dark shadow-md hover:shadow-xl p-4">
    //   <div className="grid grid-cols-1 md:grid-cols-2">
    //     <div className="flex flex-col gap-2">
    //       <span className="font-bold text-bcgov-blue-dark">{competition.classification}</span>
    //       <div><span>{`REQ: `}</span><i className="inline">{competition.requisition}</i></div>
    //       <span>Anticipated Posting Date: {dayjs(competition.application_submission_period[0]).format('MMM D, YYYY')}</span>
    //     </div>
    //     <div className="py-2 md:py-0 text-start md:text-end my-0 md:my-auto">
    //       Deadline to join:
    //       <br />
    //       <span className="font-bold">{dayjs(competition.opportunity_submission_period[1]).format('MMM D, YYYY')}</span>
    //     </div>
    //   </div>
    // </Card>
  );
}

const data: Competition[] = [
  {
    id: '0',
    form_url: 'https://submit.digital.gov.bc.ca/app/form/submit?f=25b4aed3-fb14-495f-9c13-36e48e6f196a',
    classification: 'Full Stack Developer (IS 27)',
    requisition: 'coming soon',
    opportunity_submission_period: ['2023-06-01T16:00:00Z', '2023-07-21T06:59:59.999Z'],
    application_submission_period: ['2023-08-11T16:00:00Z', '2023-07-07T06:59:59.999Z'],
  },
  {
    id: '1',
    form_url: 'https://submit.digital.gov.bc.ca/app/form/submit?f=af4a3ed7-de98-4403-868d-3257354a2529',
    classification: 'Senior Scrum Master (IS 27)',
    requisition: 'coming soon',
    opportunity_submission_period: ['2023-06-01T16:00:00Z', '2023-07-21T06:59:59.999Z'],
    application_submission_period: ['2023-08-11T16:00:00Z', '2023-07-07T06:59:59.999Z'],
  },
];

export default function CompetitionList() {
  return (
    <div className="flex flex-col gap-6 text-lg mt-10 mb-12">
      {data.map((d) => (
        <CompetitionCard competition={d} key={d.id} />
      ))}
    </div>
  );
}
