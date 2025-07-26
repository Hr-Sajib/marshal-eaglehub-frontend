import AddNewToolsForm from '@/component/allForms/AddNewTools'
import CampaignPerformance from '@/component/founder-dashboard/CampaignPerformance'
import { data } from '@/component/influencer-dashboard/SocialMediaCards'
import TopGiveaways from '@/component/influencer-dashboard/TopGiveaways'
import Container from '@/component/shared/Container'
import MainHeader from '@/component/shared/MainHeader'
import RedShadow from '@/component/shared/RedShadow'
import SocialMediaCard from '@/component/shared/SocialMediaCard'
import SubHeader from '@/component/shared/SubHeader'
import React from 'react'



export default function page() {



    return (
        <div>
            <Container>
            <RedShadow className='top-60 right-0' />
            <MainHeader title="Founder Dashboard" header='Welcome John,' />
            <AddNewToolsForm />

            <div className='py-[77px]'>
                <h1 className="text-center text-2xl md:text-[35px] pb-[67px] text-white">See Views, Click and Conversion</h1>
                <div className="flex flex-wrap  gap-5  justify-center">
                    {data.map((item) => (
                        <SocialMediaCard
                            key={item.id}
                            id={item.id}
                            icon={item.icon}
                            followers={item.followers}
                            clicks={item.clicks}
                            shares={item.shares}
                            comments={item.comments}
                            earnings={item.earnings}
                        />
                    ))}
                </div>
            </div>
            <SubHeader title="Top Giveaways" />
            <TopGiveaways/>
            <CampaignPerformance/>
      
          </Container>
        </div>
    )
}
