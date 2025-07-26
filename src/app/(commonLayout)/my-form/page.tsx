import InvestorForm from '@/component/my-form/InvestorForm'
import Container from '@/component/shared/Container'
import RedShadow from '@/component/shared/RedShadow'
import React from 'react'

export default function page() {
  return (
    <div>
        <RedShadow/>
        <Container>
            <InvestorForm/>
        </Container>
    </div>
  )
}
