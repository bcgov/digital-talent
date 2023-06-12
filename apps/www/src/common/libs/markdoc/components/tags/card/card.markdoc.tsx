import { Card, CardContent } from '../../../../../components/ui/card.component';

type CardProps = {
  children: string;
  text: string;
};

export default function WrappedCard({ children, text }: CardProps) {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">{children}</CardContent>
    </Card>
  );
}
