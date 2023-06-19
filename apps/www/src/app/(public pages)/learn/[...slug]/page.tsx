/* eslint-disable no-console */
import Markdoc from '@markdoc/markdoc';
import { promises as fs } from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import path from 'path';
import React from 'react';
import CallToAction from '../../../../common/components/ui/call-to-action/call-to-action.component';
import HeroTitle from '../../../../common/components/ui/hero/hero.component';
import PageNav from '../../../../common/libs/markdoc/components/page-nav/page-nav.component';
import { components, config } from '../../../../common/libs/markdoc/markdoc.config';
import { extractHeadings } from '../../../../common/libs/markdoc/utils/extract-headings.util';
import { wrapTitle } from '../../../../common/utils/wrap-title.util';

type Params = {
  slug: string[];
};

type PageProps = {
  params: Params;
};

const PAGES_DIR = 'src/app/(public pages)/learn';
const PAGES_PATH = path.join(process.cwd(), PAGES_DIR);

export async function generateStaticParams() {
  const pagesPath = await glob(path.join(PAGES_PATH, '**/*.md'));

  const paths = pagesPath.map((pagePath) => {
    const url = pagePath.replace(`${PAGES_PATH}/`, '').replace('.md', '');

    return { slug: url.split('/') };
  });

  return paths;
}

export async function generateMetadata({ params }: PageProps) {
  const { title } = await getMarkdownContent(params.slug);

  return {
    title: wrapTitle(title),
  };
}

async function getMarkdownContent(slug: string[]) {
  const pagePath = `${path.join(PAGES_PATH, ...slug)}.md`;
  let source: string;

  // If pagePath does not exist, return
  try {
    source = await fs.readFile(pagePath, 'utf-8');
  } catch (error) {
    return notFound();
  }

  const headmatter = matter(source);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, navigation } = headmatter.data;
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast, config);
  return { content, navigation, title };
}

export default async function Page({ params }: PageProps) {
  const { content, navigation, title } = await getMarkdownContent(params.slug);
  const headings = extractHeadings(content);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeroTitle title={title} variant="section-heading" />
      <div className="container mx-auto mt-4">
        <div className="flex gap-4">
          {navigation != null && (
            <div className="hidden md:block shrink-0 w-72">
              <PageNav headings={headings} />
            </div>
          )}
          <div className="prose max-w-none">{Markdoc.renderers.react(content, React, { components })}</div>
        </div>
      </div>
      <CallToAction
        description="Submit your position details to the team to join the next cross ministry hiring."
        title="Ready to join?"
        button={{
          text: 'Get Started',
          href: 'https://submit.digital.gov.bc.ca/app/form/submit?f=a6ca83a2-71a3-4b4b-9acc-0b7f5723dede',
        }}
      />
    </>
  );
}
