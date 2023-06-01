import dayjs from 'dayjs';
import Card from '../../card.component';

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
  return (
    <a href={competition.form_url} rel="noreferrer" target="_blank">
      <Card className="hover:ring-1 ring-bcgov-blue-dark hover:shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-bcgov-blue-dark">{competition.classification}</span>
            <span>{`REQ ${competition.requisition}`}</span>
            <span>Posting Date: {dayjs(competition.application_submission_period[0]).format('MMM D, YYYY')}</span>
          </div>
          <div className="py-2 md:py-0 text-start md:text-end my-0 md:my-auto">
            Deadline to join:
            <br />
            <span className="font-bold">
              {dayjs(competition.opportunity_submission_period[1]).format('MMM D, YYYY')}
            </span>
          </div>
        </div>
      </Card>
    </a>
  );
}

const data: Competition[] = [
  {
    id: '0',
    form_url: '/',
    classification: 'Full Stack Developer (IS 27)',
    requisition: '1234',
    opportunity_submission_period: ['2023-06-01T16:00:00Z', '2023-06-13T06:59:59.999Z'],
    application_submission_period: ['2023-06-25T16:00:00Z', '2023-07-07T06:59:59.999Z'],
  },
  {
    id: '1',
    form_url: '/',
    classification: 'UX Designer (AO 24)',
    requisition: '1234',
    opportunity_submission_period: ['2023-06-01T16:00:00Z', '2023-06-13T06:59:59.999Z'],
    application_submission_period: ['2023-06-25T16:00:00Z', '2023-07-07T06:59:59.999Z'],
  },
];

export default function CompetitionList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-lg">
        {data.map((d) => (
          <CompetitionCard competition={d} key={d.id} />
        ))}
      </div>
    </div>
  );
}
