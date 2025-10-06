import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import PredictiveMaintenance from '../components/PredictiveMaintenance'
import NavigationDocking from '../components/NavigationDocking'
import RoboticArms from '../components/RoboticArms'
import TechnicalFormulas from '../components/TechnicalFormulas'
import Impact from '../components/Impact'
import MarketBusiness from '../components/MarketBusiness'
import NextSteps from '../components/NextSteps'
import Footer from '../components/Footer'
import ScrollProgress from '../components/ScrollProgress'
import ScrollToTop from '../components/ScrollToTop'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <main className="min-h-screen bg-deepSpace overflow-x-hidden"> 
        <Hero />
        <ProblemSolution />
        {/* PIPELINE STAGES */}
        <PredictiveMaintenance />
        <NavigationDocking />
        <RoboticArms />
        {/* MATHEMATICAL FOUNDATION */}
        <TechnicalFormulas />
        {/* SUPPORTING SECTIONS */}
        <Impact />
        <MarketBusiness />
        <NextSteps />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}