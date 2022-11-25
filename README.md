This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Features
1. Next JS with TypeScript
2. Dynamic SEO tags / component implemented 
3. next-theme used for Dark-Light mode
4. Fully functional PWA implemented
5. Separate Analytics Component implemented to Integrate with GTM, Facebook pixel etc.
## Getting Started

First, Install it your local machine with required dependencies using,
npm install

or

yarn

Sencond, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

and replce GTM_ID, MEAT_ID with your GTM_ID & META_ID in .env.local file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

For production at the time of deployment,
Don't forget to update environment variables as you used in .env.local



## Docker Commands
docker tag local-image:tagname new-repo:tagname
# e.g. docker tag b93b6a8a9eb4 yuvraaj103/cricket-aryans-nextapp:v1

docker push new-repo:tagname
# For Local Development
docker-compose up --build --force-recreate
# For Production Deployment
docker-compose -f docker-compose.prod.yml up --build --force-recreate