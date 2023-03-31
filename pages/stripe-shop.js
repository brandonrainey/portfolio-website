import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function StripeShop() {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="sm:text-6xl text-5xl sm:mb-12 mt-4 px-4 font-semibold text-center">
        <a href={'https://stripe-shop.netlify.app'}>Stripe Shop</a>
      </h1>
      <Carousel
        responsive={responsive}
        itemClass={`image-item`}
        className="sm:w-5/6 w-full"
      >
        <img src="/stripeShopSS.webp" className="mr-4"></img>
        <img src="/stripeShopSS2.webp" className="mr-4"></img>
        <img src="/stripeShopSS3.webp" className=" "></img>
        <img src="/stripeShopSS4.webp" className=" "></img>
        <img src="/stripeShopSS5.webp" className=" "></img>
      </Carousel>

      <div className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mt-4 font-semibold">
          Technology Used
        </h2>
        <div className="flex items-center gap-4  flex-wrap md:w-full w-5/6 justify-center mb-2">
          <img src="/reactIcon.png" className="h-20 w-30 mt-4"></img>
          <img src="/typescriptIcon.png" className="h-16 w-26 mt-4"></img>
          <img src="/reduxIcon.png" className="h-16 w-30 mt-4"></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
          <img src="/firebaseIcon.png" className="h-24 w-30 mt-4"></img>
        </div>
      </div>
      <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
        <li>
          I used Next.js as my react framework as i do for most projects, as i
          find it the most feature rich and performant. Similarly i used
          Tailwind CSS to style this project as it helps streamline my building
          process. Another frequently used service by me is Firebase as the
          backend, mostly as its what im most familiar with, which allows me to
          focus on the frontend more.
        </li>
        <li>
          This was my second project using Typescript with the intent to
          continue to use it instead of vanilla Javascript. Same situation with
          the use of Redux as my state management.
        </li>
      </ul>

      <article className="flex flex-col items-center gap-6">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Description
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Ecommerce site with several features, starting with a main page with
            two sections. One to click icons to route to the different category
            pages. And the other a list of deals that can be directly added to
            cart. The header contains a nav for all products page, categories of
            products pages, deals page, and orders page. The search bar actively
            searches through all products, leading to a lightbox product page.
            The last two items are the sign in/out link through google, and the
            cart link.
          </li>
          <li>
            All product pages are responsive grids of the products cards, with
            an alert popup when an item is added to cart. The cart page displays
            your items, the total, and a checkout button, with a button to
            remove items from the cart. The checkout button navigates to the
            prebuilt Stripe checkout page where you can complete your order. On
            success, navigates to a success page where you then can view your
            previous orders through the orders page.
          </li>
        </ul>
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            First time using a real payment processor through stripe. Which
            consisted of creating an account and getting the required keys. Then
            creating a file that takes in the items stored in our cart state and
            transforming them into the proper object format required by stripe.
            In the same file setting up the final properly formatted object with
            the desired settings as our stripe session.
          </li>
          <li>
            With the stripe session created the user will be redirected to
            stripe&apos;s prebuilt checkout page to finish completing their
            order. To correctly capture the events sent back by stripe after an
            order has been completed, i created my first webhook.
          </li>
          <li>
            I learned that a webhook acts as a middleman between our app and
            stripe, allowing us to capture set events when an order is
            completed. Capturing the checkoutSession event I was able to tell if
            the order was successful, along with the accompanying details of
            said order. Then sending the order details to our firestore backend,
            storing individual users and their past orders.
          </li>
          <li>
            Started using getServerSideProps to fetch the data from the api. But
            ended up switching over to getStaticProps to increase the
            performance significantly as i learned when using getServerSideProps
            runs every time there was a route change, slowing performance.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Migrate to a more vast api of products to increase
            diversity/increase speed of the api calls
          </li>
          <li>Improve all parts of the design to improve user experience.</li>
          <li>
            Provide user more access to the data returned from the database,
            such as more order details, and potential stripe events
          </li>
        </ul>
      </article>
    </div>
  )
}
