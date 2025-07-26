import FounderSetup from '@/component/giveaways/FounderSetup'
import FundsHandling from '@/component/giveaways/FundHandling'
import GiveawayStatus from '@/component/giveaways/GiveawaysStatus'
import JoinInstructions from '@/component/giveaways/JoinInstruction'
import VerifiedByAiBot from '@/component/giveaways/VerifiedByAi'
import Container from '@/component/shared/Container'
import MainHeader from '@/component/shared/MainHeader'
import RedShadow from '@/component/shared/RedShadow'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div >
            <RedShadow/>
            <Container>
                <MainHeader title={<>Run or Join Giveaways <br /> & Win Big
                <div className="text-center">
                <Image
                    src={"/line.svg"}
                    alt="Line"
                    width={533}
                    height={1}
                    className='line-svg mx-auto'
                />
            </div>
                </>} 
                
                subtitle={<>Explore exciting giveaways and get a chance to win fantastic prizes
                </>} className="rounded-lg">
                    <div className="space-x-4 space-y-2 ">

                        
                    </div>
                </MainHeader>

                <FounderSetup/>
                <JoinInstructions/>
                <GiveawayStatus/>
                <VerifiedByAiBot/>
                <FundsHandling/>


            </Container>

        </div>
    )
}
