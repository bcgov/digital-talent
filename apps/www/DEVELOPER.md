# Digital Talent Website

The `Digital Talent` website is created with [Next.js 13](https://nextjs.org/) using the [App Router](https://nextjs.org/blog/next-13-4#nextjs-app-router).

## Features

- [NextAuth.js](https://next-auth.js.org/) for authentication with Keycloak
- [TailwindCSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com/) for barebones UI components
- [Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components) for public-facing pages, with [Client Components](https://nextjs.org/docs/getting-started/react-essentials#client-components) for interactive content
- [Markdoc](https://markdoc.dev/)-powered public-facing [content pages](</apps/www/src/app/(public%20pages)/learn>) which can be managed independently by non-developers
- Github Actions [workflow](/.github/workflows/build-www.yml) to build and push project to Artifactory
- OpenShift [templates](/openshift/www) to set up required infrastructure

# Getting Started

1. From the root of the repository, run the development server

   ```sh
   npm -w @bcgov-dt/www run dev
   ```

2. Visit `http://localhost:3000` in your browser to see the site

# Structure

The `Digital Talent Website` provides information and services to 3 distinct user groups:

1. Hiring Managers
2. Candidates - _Work in Progress_
3. Recruitment Teams - _Work in Progress_

The `Digital Talent Website` is organized into 2 main components: `(public pages)` and `admin`.

```sh
.
└── www
    └── src
        └── app
            ├── (public pages) # Contains public-facing content pages
            └── admin # Contains back-office application to manage and observe the hiring process
```

`(public pages)` are futher broken down into `candidates`, `hiring-managers`, and `learn`.

```sh
.
└── ...
    └── (public pages)
        ├── candidates # Contains candidate-centric pages
        ├── hiring-managers # Contains hiring manager-centric pages
        └── learn # Contains Markdoc-powered content pages.  Intended for content which can be created independently of development efforts
```
