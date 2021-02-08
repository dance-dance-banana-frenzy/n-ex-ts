1. `npm start` nodemon runs against server/index.ts along with TypeScript validation
1. `npm run build` JavaScript and TypeScript files in `server/` are converted to JavaScript and put into `/build` folder

# Client

1. Built using webpack
1. Runs react redux saga
1. All server-calls go through express served from `/server` or `/build` folder to get local static files and remote api calls
1. output path is `/dist`

# Server

1. running node express
1. output path is `/build`
1. `/public` contains static aseets
1. Any folder named `public` is mapped to content `/public` to support relative links `/this/very/deep/folder/public/folder/image.jpg` maps to `/public/folder/image.jpg` instead of `../../../public/folder/image.jpg`
1. `/api` folder is mapped as a proxy to external websites. `/api/search` goes to `http://www.google.com/search`

# TypeScript

1. Only in `/server` folder
1. Many well-known libraries have TypeScript packages `@types/{package-name}`. ie `express` has TypeScript in `@types/express`
