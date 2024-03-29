/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import Markdoc, { RenderableTreeNode } from '@markdoc/markdoc';
import matter from 'gray-matter';
import React, { createRef, useEffect, useState } from 'react';
import Heading from '../../../common/components/ui/heading.component';
import HeroTitle from '../../../common/components/ui/hero/hero.component';
import PageNav from '../../../common/libs/markdoc/components/page-nav/page-nav.component';
import { components, config } from '../../../common/libs/markdoc/markdoc.config';

import { extractHeadings } from '../../../common/libs/markdoc/utils/extract-headings.util';

function parseMarkdoc(string: string) {
  let headmatter;

  try {
    headmatter = matter(string);
  } catch (error) {
    // Do nothing
  }

  const { title, navigation } = (headmatter ?? ({ data: {} } as any)).data;
  const ast = Markdoc.parse(string);
  const content = Markdoc.transform(ast, config);

  return { content, navigation, title };
}

export default function Page() {
  const [value, setValue] = useState<string>(
    ['---', 'title: Enter your content here', 'description: A place for you to test out your Markdoc', '---'].join(
      '\n',
    ),
  );

  const [markdoc, setMarkdoc] = useState<{ content: RenderableTreeNode; navigation: boolean; title: any } | undefined>(
    undefined,
  );
  const headings = extractHeadings(markdoc?.content);

  const markdownRendererRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setMarkdoc(parseMarkdoc(value));
  }, [value]);

  return (
    <div className="h-[calc(100vh-64px)]">
      <div>
        <Heading level={1}>Markdoc Previewer</Heading>
      </div>
      <div className="gap-4 grid grid-cols-2 h-[calc(100%-36px)]">
        <div className="border border-bcgov-blue-dark">
          <textarea
            className="w-full p-2 h-full font-mono text-sm"
            onChange={(e) => setValue(e.target.value)}
            style={{ resize: 'none' }}
            value={value}
          />
        </div>
        <div className="overflow-y-auto !scroll-smooth" ref={markdownRendererRef}>
          {markdoc && markdoc.title && <HeroTitle title={markdoc.title} variant="section-heading" />}
          <div className="container mx-auto mt-4">
            <div className="flex gap-4">
              {markdoc && markdoc.navigation === true && (
                <div className="hidden md:block shrink-0 w-72">
                  <PageNav headings={headings} parentRef={markdownRendererRef} />
                </div>
              )}
              <div className="prose max-w-none">
                {markdoc && Markdoc.renderers.react(markdoc.content, React, { components })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
