import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatFlowsIn from './components/WhatFlowsIn'
import AILayer from './components/AILayer'
import WhatFlowsOut from './components/WhatFlowsOut'
import HISIntegration from './components/HISIntegration'
import IndiaCompliance from './components/IndiaCompliance'
import Timeline from './components/Timeline'
import ROI from './components/ROI'
import SocialProof from './components/SocialProof'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import RequestDemoModal from './RequestDemoModal'
import { useEffect, useState } from 'react'

function App() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <RequestDemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
      <Hero />
      <WhatFlowsIn />
      <AILayer />
      <WhatFlowsOut />
      <HISIntegration />
      <IndiaCompliance />
      <Timeline />
      <ROI />
      <SocialProof />
      <CTASection />
      <Footer />
    </>
  )
}

export default App
