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
          Next.js serves as my go-to React framework for most projects, thanks
          to its rich feature set and performance capabilities. I chose Tailwind
          CSS for styling this project, as it streamlines the development
          process. Firebase is another frequently used service as my backend,
          primarily because of my familiarity with it, allowing me to
          concentrate on frontend development.
        </li>
        <li>
          This was my second project using TypeScript, and I plan to continue
          using it over vanilla JavaScript. Similarly, I decided to use Redux
          for state management.
        </li>
      </ul>

      <article className="flex flex-col items-center gap-6">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Description
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            This e-commerce site features a main page with two sections: one for
            navigating to different category pages and another for accessing
            deals that can be directly added to the cart. The header contains
            navigation links to all products, product category pages, deals, and
            orders. The search bar allows users to actively search through all
            products, leading to a lightbox product page. Additional features
            include a Google sign-in/out link and a cart link.
          </li>
          <li>
            Product pages showcase responsive grids of product cards with an
            alert popup when an item is added to the cart. The cart page
            displays items, the total, and a checkout button, along with a
            button to remove items. Upon clicking the checkout button, users are
            redirected to the prebuilt Stripe checkout page to complete their
            orders. Successful transactions navigate users to a success page,
            where they can view previous orders through the orders page.
          </li>
        </ul>
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center">
          Challenges/What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            This project marked my first time using a real payment processor,
            Stripe. I learned how to create an account, obtain the required
            keys, and set up a properly formatted object with the desired
            settings as a Stripe session. I also created my first webhook, which
            acted as a middleman between the app and Stripe, allowing me to
            capture events upon order completion. This enabled me to send order
            details to the Firestore backend, storing individual users and their
            past orders.
          </li>
          <li>
            Initially, I used getServerSideProps to fetch data from the API, but
            later switched to getStaticProps for significantly improved
            performance.
          </li>
        </ul>

        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold text-center px-2">
          Potential Additions/Improvements
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full sm:text-lg text-md tracking-wide">
          <li>
            Migrate to a more extensive API of products to diversify offerings
            and increase API call speeds.
          </li>
          <li>Enhance all aspects of design for improved user experience.</li>
          <li>
            Provide users with more access to data returned from the database,
            such as more order details and potential Stripe events.
          </li>
        </ul>
      </article>
    </div>
  )
}
