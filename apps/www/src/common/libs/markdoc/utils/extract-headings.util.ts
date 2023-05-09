/* eslint-disable @typescript-eslint/no-explicit-any */
export function extractHeadings(node: any, sections: any[] = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        extractHeadings(child, sections);
      }
    }
  }

  return sections;
}
