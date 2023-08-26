/* eslint-disable @typescript-eslint/no-explicit-any */
import { Config, nodes } from '@markdoc/markdoc';
import Link from '../../components/link.component';
import { Button } from '../../components/ui/button';
import MDHeading from './components/nodes/md-heading.markdoc';

import Paragraph from './components/nodes/paragraph.markdoc';
import MDCallToAction from './components/tags/call-to-action/md-call-to-action.markdoc';
import Card from './components/tags/card/card.markdoc';
import Div from './components/tags/div/div.markdoc';
import { IconList, IconListItem } from './components/tags/icon-list';
import OurNumbers from './components/tags/our-numbers/our-numbers.markdoc';
import Quote from './components/tags/quote/quote.markdoc';
import Span from './components/tags/span/span.markdoc';

const config: Config = {
  nodes: {
    blockquote: {
      render: 'Quote',
      attributes: {
        text: {
          type: String,
        },
      },
    },
    link: {
      render: 'Link',
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
    'our-numbers': {
      render: 'OurNumbers',
      attributes: {},
    },
    button: {
      render: 'Button',
      attributes: {
        variant: {
          type: String,
        },
      },
    },
    'call-to-action': {
      render: 'CallToAction',
      attributes: {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        action_text: {
          type: String,
        },
        action_href: {
          type: String,
        },
      },
    },
    card: {
      render: 'Card',
    },
    div: {
      render: 'Div',
      attributes: {
        className: {
          type: String,
        },
      },
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
    span: {
      render: 'Span',
      attributes: {
        className: {
          type: String,
        },
      },
    },
  },
};

const components = {
  Button,
  CallToAction: MDCallToAction,
  Card,
  Div,
  Heading: MDHeading,
  Link,
  IconList,
  IconListItem,
  Quote,
  Paragraph,
  Span,
  OurNumbers,
};

export { components, config };
