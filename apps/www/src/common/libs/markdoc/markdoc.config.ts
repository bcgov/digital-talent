/* eslint-disable @typescript-eslint/no-explicit-any */
import { Config, nodes } from '@markdoc/markdoc';

import Heading from '../../components/ui/heading.component';
import Paragraph from './components/nodes/paragraph.markdoc';
import SmartLink from './components/nodes/smart-link.markdoc';
import Card from './components/tags/card/card.markdoc';
import { IconList, IconListItem } from './components/tags/icon-list';
import Quote from './components/tags/quote/quote.markdoc';

const config: Config = {
  nodes: {
    link: {
      render: 'SmartLink',
      attributes: {
        href: { type: String },
        title: { type: String },
      },
    },
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
    fence: {
      render: 'Card',
      attributes: nodes.fence.attributes,
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
  SmartLink,
  IconList,
  IconListItem,
  Quote,
  Paragraph,
};

export { components, config };
