import React from 'react'

export default function StripeShop() {
  return (
    <div className='flex flex-col items-center'>
        <div className='grid grid-cols-2 lg:grid-cols-3 w-2/3 gap-2'>
            <img src='/stripeShopSS2.png' className='border-2 border-red-600 w-auto  lg:col-span-3 object-contain'></img>
            <img src='/stripeShopSS2.png' className='border-2 border-red-600 w-auto  object-contain'></img>
            <img src='/stripeShopSS2.png' className='border-2 border-red-600 w-auto  object-contain'></img>
            <img src='/stripeShopSS2.png' className='border-2 border-red-600 w-auto  object-contain'></img>
        </div>
        <div>
            Description/technology
        </div>
        <div>
            What i learned
        </div>
    </div>
  )
}
