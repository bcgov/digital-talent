import { Config } from '@markdoc/markdoc';
import Heading from './components/nodes/heading.markdoc';
import Paragraph from './components/nodes/paragraph.markdoc';
import Card from './components/tags/card/card.markdoc';
import { IconList, IconListItem } from './components/tags/icon-list';
import Quote from './components/tags/quote/quote.markdoc';

const config: Config = {
  nodes: {
    heading: {
      render: 'Heading',
      attributes: {
        level: { type: String },
      },
    },
    paragraph: {
      render: 'Paragraph',
    },
  },
  tags: {
    card: {
      render: 'Card',
    },
    'icon-list': {
      render: 'IconList',
      attributes: {
        text: {
          type: String,
        },
      },
    },
    'icon-list-item': {
      render: 'IconListItem',
      attributes: {
        color: {
          type: String,
        },
        icon: {
          type: String,
        },
        iconBgColor: {
          type: String,
        },
        iconColor: {
          type: String,
        },
        text: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    },
    quote: {
      render: 'Quote',
      attributes: {
        text: {
          type: String,
        },
      },
    },
  },
};

const components = {
  Card,
  Heading,
  IconList,
  IconListItem,
  Quote,
  Paragraph,
};

export { components, config };
