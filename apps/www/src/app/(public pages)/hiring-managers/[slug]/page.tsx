import Markdoc from '@markdoc/markdoc';
import { promises as fs } from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import path from 'path';
import React from 'react';
import { Button } from '../../../../common/components/ui/button';
import CallToAction from '../../../../common/libs/markdoc/components/call-to-action/call-to-action.component';
import HeroTitle from '../../../../common/libs/markdoc/components/hero/hero.component';
import { components, config } from '../../../../common/libs/markdoc/markdoc.config';

type Params = {
  slug: string;
};

type PageProps = {
  params: Params;
};

const PAGES_DIR = 'src/app/(public pages)/hiring-managers/(pages)';
const PAGES_PATH = path.join(process.cwd(), PAGES_DIR);

export async function generateStaticParams() {
  const pagesPath = await glob(path.join(PAGES_PATH, '**/*.md'));
  return pagesPath.map((pagePath) => {
    return { slug: path.basename(pagePath, path.extname(pagePath)) };
  });
}

async function getMarkdownContent(slug: string | undefined) {
  const pagePath = path.join(PAGES_PATH, `${slug}.md`);
  let source: string;

  // If pagePath does not exist, return
  try {
    source = await fs.readFile(pagePath, 'utf-8');
  } catch (error) {
    return notFound();
  }

  const headmatter = matter(source);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, type } = headmatter.data;
  const ast = Markdoc.parse(source);
  const content = Markdoc.transform(ast, config);
  return { content, title };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { title } = await getMarkdownContent(params.slug);
  return { title };
}

export default async function Page({ params }: PageProps) {
  const { content, title } = await getMarkdownContent(params.slug);

  return (
    <>
      <HeroTitle title={title} />
      <div className="container mx-auto mt-4">
        <div className="prose max-w-none">{Markdoc.renderers.react(content, React, { components })}</div>
      </div>
      <CallToAction
        description="Submit your position details to the team to join the next cross ministry hiring."
        title="Ready to join?"
      >
        <Button variant="call-to-action">Get Started</Button>
      </CallToAction>
    </>
  );
}
