
# How to install dependencies

npx create-next-app@latest outfit-builder

it creates a latest nextjs configuration

on your terminal after this you can select this 
outfit-builder app

√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like your code inside a `src/` directory? ... Yes
√ Would you like to use App Router? (recommended) ... No 
√ Would you like to use Turbopack for `next dev`? ... No 
√ Would you like to customize the import alias (`@/*` by default)? ... No






# How to run the app locally

on your machine open vs code 
clicking on the terminal 
run this commands 


git clone https://github.com/DaveedGangi/outfitBuilder.git

npm run dev 

you will see a port number :3000 
click on the port you can see the website 




# Features of the app

user can collection of outfits drag and drop into the canvas 
he can reset on clicking on the rest button all outfits are removed 
on clicking on the save he can save those outfits after some time 
again if he open the app he can see previous outfits 
on clicking on add to cart he can see items are added into the cart section

below he can see both the saved outfits and cart items 
he can remove those saved items 
responsive added 



# Any additional instructions

if you want to try adding more outfits 
simply saved outfits on your machine 
drag into that public/images/ folder 

after that go to the src/pages/index.tsx 
you can see in that file related to this 
you can add your image like this 

const clothingItems=[
    {
      imageSrc:"/images/shirtimage1.png",
      label:"Shirt",
      position:"middle"
    }]

you can implement positon where you need to position on canvas 
imageSrc place your imagepath 
label give that outfit name 
































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
