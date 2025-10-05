import Hero from '../components/Hero'
import ProblemSolution from '../components/ProblemSolution'
import TechPipeline from '../components/TechPipeline'
import MediaShowcase from '../components/MediaShowcase'
import DataVisualization from '../components/DataVisualization'
import PartsSpec from '../components/PartsSpec'
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
      <TechPipeline />
      <MediaShowcase />
      <DataVisualization />
      <PartsSpec />
      <Impact />
      <MarketBusiness />
        <NextSteps />
        <Footer />
      </main>
      <ScrollToTop />
    </>
  )
}
