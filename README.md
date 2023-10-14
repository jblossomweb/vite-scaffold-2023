This is a [`React 18`](https://react.dev/) project bootstrapped with [`vite`](https://vitejs.dev/).

## Prerequisites

![](https://nodejs.org/static/images/logo.svg)

[Node.js](https://nodejs.org/) version [`>=18.18.2`](https://nodejs.org/dist/v18.18.2/node-v18.18.2.pkg)

## Getting Started

First, install dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

#### React Pages

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/app/pages/HomePage`. The page auto-updates as you edit the file.
The Route for this page is defined by `src/app/index.ts`.

#### Component Library

To run the storybook dev server:

```bash
npm run storybook
```

To generate a static build that can be independently deployed:

```bash
npm run storybook:build
```

#### Production Build

To build a production version of the app that can be deployed:

```bash
npm run build
```

#### Other Commands

To run the linter:

```bash
npm run lint
```

To run the formatter:

```bash
npm run format
```

To run tests once:

```bash
npm test
```

To run test watcher:

```bash
npm run test:watch
```

To run coverage report:

```bash
npm run test:coverage
```

A full list of commands can be found in the [`package.json`](https://github.com/jblossomweb/vite-scaffold-2023/blob/main/package.json)
