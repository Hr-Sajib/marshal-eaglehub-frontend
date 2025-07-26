import AboutDescription from '@/component/about/AboutDescription'
import Leaderboard from '@/component/about/Leaderboard'
import Container from '@/component/shared/Container'
import MainHeader from '@/component/shared/MainHeader'
import RedShadow from '@/component/shared/RedShadow'
import React from 'react'

export default function page() {
    return (
        <div>
            <RedShadow />
            <Container>
                <MainHeader title={<>They Laughed When We Started. Now <br /> They’re Asking for Access.
                </>} subtitle={<>Where does it come from?
                </>} className="rounded-lg">
                    <div className="space-x-4 space-y-2 ">


                    </div>
                </MainHeader>
                <AboutDescription/>
                <Leaderboard/>


            </Container>

        </div>
    )
}
