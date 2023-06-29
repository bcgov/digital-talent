# Digital Talent

# Overview

The `Digital Talent` monorepo uses [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true) to manage multiple projects. You can run commands at the root level, or on a per-project basis.

> As a convention, always run commands from the root of the monorepo

```sh
# Install dependencies for all projects
npm install

# Run a command in the www project
npm -w <project name> <command>
```

Projects are located in `apps` and `packages`.

```sh
.
├── apps       # contains complete applications
│   └── www
└── packages   # contains shared code: validation classes, UI components, libraries, etc...
```

# Getting Started

1. Clone this repository

   ```sh
   cd ~/Developer # For Example
   git clone https://github.com/bcgov/digital-talent.git
   ```

2. Open `digital-talent.code-workspace` in Visual Studio Code. This workspace contains a pre-configured environment with opinionated code formatting and Visual Studio Code extensions.

3. Open a terminal in the root of the project and install dependencies

   ```sh
   npm install
   ```

> See `DEVELOPER.md` in each project for project-related guidance.
>
> - [`www` Developer Docs](/apps/www/DEVELOPER.md)
