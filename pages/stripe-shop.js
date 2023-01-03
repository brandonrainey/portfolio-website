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
    <div className="flex flex-col items-center gap-6">
      <h1 className="sm:text-6xl text-5xl mb-12 mt-4 px-4 font-semibold text-center">
        Stripe Shop
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
        <div className="flex items-center gap-2  flex-wrap md:w-full w-5/6 justify-center mb-2">
          <img src="/reactIcon.png" className="h-20 w-30 mt-4"></img>
          <img src="/typescriptIcon.png" className="h-16 w-26 mt-4"></img>
          <img src="/reduxIcon.png" className="h-20 w-30 mt-4"></img>
          <img src={`/nextjsIconWhite.png`} className="h-20 w-30"></img>
          <img src="/tailwindIcon.png" className=" aspect-5/3 max-h-14"></img>
          <img src="/firebaseIcon.png" className="h-24 w-30 mt-4"></img>
        </div>
      </div>

      <article className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-2xl mb-2 font-semibold">
          What I Learned
        </h2>
        <ul className="list-disc px-8 gap-2 flex flex-col pb-4 sm:w-3/4 w-full text-lg">
          <li>
            First time using a real payment processor through stripe. Which
            consisted of creating an account and getting the required keys. Then
            creating a file that takes in the items stored in our cart state and
            transforming them into the proper object format required by stripe.
            In the same file setting up the final propery formatted object with
            the desired settings as our stripe session.
          </li>
          <li>
            With the stripe session created the user will be redirected to
            stripe&apos;s prebuilt checkout page to finish completing thier
            order. To correctly capture the events sent back by stripe after an
            order has been completed, i created my first webhook.
          </li>
          <li>
            I learned that a webhook acts as a middleman between our app and
            stripe, allowing us to capture set events when an order is
            completed. Capturing the checkoutSession event I was able to tell if
            the order was successful, along with the accompanying details of
            said order. Then sending the order details to our firestore backend,
            storing individual users and thier past orders.
          </li>
        </ul>
      </article>
    </div>
  )
}
