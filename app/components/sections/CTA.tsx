import SiteConfig from '@/app/config/site'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-3">
                <div className="relative isolate overflow-hidden bg-blue-800 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">Unlock the Power
                        of Full Controll on Your website</h2>
                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-200">
                        {SiteConfig.description}</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link className="rounded-md bg-green-500 px-5 py-3 text-lg font-semibold text-white shadow-md hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                            href="/admin">Get Started Now</Link>
                    </div>
                    <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                        aria-hidden="true">
                        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle>
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(512 512) rotate(90) scale(512)">
                                <stop stop-color="#7775D6"></stop>
                                <stop offset="1" stop-color="#E935C1" stopOpacity="0"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default CTA