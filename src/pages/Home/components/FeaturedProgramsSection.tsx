import { Link } from 'react-router-dom';

const FeaturedProgramsSection = () => {
  return (
    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-yellow-400">Featured Programs</h3>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Link to="/footprint" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
          FOOTPRINT MASTERY
          <p className="font-normal text-sm mt-1">Master order flow and institutional movements</p>
        </Link>
        <Link to="/crypto" className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-lg text-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
          CRYPTO MARKET MASTERY
          <p className="font-normal text-sm mt-1">Navigate volatile crypto markets like a pro</p>
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProgramsSection 