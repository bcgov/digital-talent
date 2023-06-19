import Heading, { HeadingProps } from '../../../../components/ui/heading.component';

export type MDHeadingProps = Omit<HeadingProps, 'variant'>;

export default function MDHeading(props: MDHeadingProps) {
  return <Heading {...props} variant="markdoc-heading" />;
}
