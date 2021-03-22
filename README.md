# TS, ESM, Jest, Storybook, Storyshots, Babel, React Combo POC

## Tech stack

- TypeScript - src
- Babel - compiles TS and JSX for test
- ES Module - destination compilation
- Jest - testing
- React - ui component library
- Storybook - visual component development

## Features

- package.json 
  - main=dist/index.js
  - module=dist/index.js
  - type=module 
  - sideEffects=false
- src/
  - *.ts files
  - *.test.ts files
  - *.stories.ts files
- dist/
  - [ESM requires file extensions on relative imports](https://nodejs.org/api/esm.html#esm_terminology)
  - typescript-esm rewrites relative imports with file extensions
- tsconfig.js
  - module=ES2020 - module system
  - target=ES5 - other language features
- .storybook
  - Used for storybook
  - Has a main.cjs file so stories can be loaded
- .storybook-storyshots
  - Used for storyshots in test
  - Has a main.js file so stories can be located during test

## See also

[https://github.com/jaketrent/ts-esm-jest-react-storybook-poc](https://github.com/jaketrent/ts-esm-jest-react-storybook-poc) - No storyshots, ts-jest instead of babel
