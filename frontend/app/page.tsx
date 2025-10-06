import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import PredictiveMaintenance from '../components/PredictiveMaintenance'
import NavigationDocking from '../components/NavigationDocking'
import RoboticArms from '../components/RoboticArms'
import Impact from '../components/Impact'
import PartsSpec from '../components/PartsSpec'
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
        {/* SUPPORTING SECTIONS */}
        <Impact />
        <PartsSpec />
        <MarketBusiness />
        <NextSteps />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )