import { useEffect } from 'react'
import { SmoothScroll } from '../components/layout/SmoothScroll'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { Hero } from '../components/sections/Hero'
import { Philosophy } from '../components/sections/Philosophy'
import { Experiences } from '../components/sections/Experiences'
import { Statement } from '../components/sections/Statement'
import { Stay } from '../components/sections/Stay'
import { Journal } from '../components/sections/Journal'
import { useReveal } from '../hooks/useReveal'

export default function App() {
  useReveal()
  useEffect(() => { document.title = 'VELORA — A quieter kind of extraordinary' }, [])
  return <SmoothScroll><SiteHeader /><main><Hero /><Philosophy /><Experiences /><Statement /><Stay /><Journal /></main><SiteFooter /></SmoothScroll>
}