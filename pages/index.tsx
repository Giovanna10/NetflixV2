import React from 'react'
import { getInitialLocale } from '../translations/getInitialLocale'
import { Layout } from '../components/Layout'

const Index: React.FC = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`)
  })
  return (
    <Layout/>
  )
}

export default Index
