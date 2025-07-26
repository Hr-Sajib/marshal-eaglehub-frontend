import AiToolsPage from '@/component/ai-bots/AITools'
import MainButton from '@/component/shared/MainButton'
import MainHeader from '@/component/shared/MainHeader'
import RedShadow from '@/component/shared/RedShadow'
import React from 'react'

export default function page() {
  return (
    <div>
        <RedShadow/>
          <MainHeader title={<>Automate Everything with AI Bots
            </>} subtitle={<>Want Custom Bots?
            </>} className="rounded-lg">
              <div className="space-x-4 space-y-2 ">
              
                <MainButton  title="Apply for Beta Access" />
              </div>
            </MainHeader>
        <AiToolsPage/>
    </div>
  )
}
