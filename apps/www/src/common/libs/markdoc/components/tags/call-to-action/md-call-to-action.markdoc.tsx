import CallToAction from '../../../../../components/ui/call-to-action/call-to-action.component';

type MDCallToActionProps = {
  title: string;
  description: string;
  action_text: string;
  action_href: string;
};

export default function MDCallToAction({ title, description, action_text, action_href }: MDCallToActionProps) {
  return (
    <div className="py-4">
      <CallToAction
        description={description}
        title={title}
        button={{
          text: action_text,
          href: action_href,
        }}
      />
    </div>
  );
}
