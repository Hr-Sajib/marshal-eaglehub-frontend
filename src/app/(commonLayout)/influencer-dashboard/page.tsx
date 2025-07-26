import TrendAnalysis from '@/component/home/TrendAnalysis'
import AffiliantLink from '@/component/influencer-dashboard/AffiliantLink'
import PortfolioCard from '@/component/influencer-dashboard/PortfolioCard'
import SocialMediaCards from '@/component/influencer-dashboard/SocialMediaCards'
import TopGiveaways from '@/component/influencer-dashboard/TopGiveaways'
import Container from '@/component/shared/Container'
import { LeftBorder } from '@/component/shared/LeftBorder'
import MainHeader from '@/component/shared/MainHeader'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div>
            <Container>

                <MainHeader title="Influencer Dashboard" header='Welcome John,' />

                <div className="text-center">
                    <Image
                        src={"/line.svg"}
                        alt="Line"
                        width={533}
                        height={1}
                        className='line-svg mx-auto mb-4'
                    />
                </div>
                <div className='max-w-[1275px] mx-auto flex mb-20 mt-10 gap-4 flex-col md:flex-row'>
                    <div className='md:w-1/2 space-y-3' >
                        <SocialMediaCards />
                        <TrendAnalysis />
                    </div>
                    <div className='md:w-1/2 '>
                        <PortfolioCard />
                    </div>
                </div>
                <div className='my-16 md:mx-32 '>
                    <LeftBorder>
                        <AffiliantLink />
                    </LeftBorder>

                </div>


                <div className='mb-[139px]'>
                    <LeftBorder>
                        <TopGiveaways />
                    </LeftBorder>
                </div>



            </Container>
        </div>
    )
}
