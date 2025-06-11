const AudienceSection = () => {
  return (
    <section className="mb-12">
      <h3 className="text-3xl font-bold mb-6 text-yellow-400">This Isn't For Everyone</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left text-lg">
        <div className="bg-red-900 bg-opacity-30 p-6 rounded-lg border border-red-500">
          <ul className="space-y-2">
            <li><span className="text-red-500 mr-2">❌</span> Get-rich-quick dreamers</li>
            <li><span className="text-red-500 mr-2">❌</span> Tip-following sheep</li>
            <li><span className="text-red-500 mr-2">❌</span> Part-time players</li>
            <li><span className="text-red-500 mr-2">❌</span> Excuse makers</li>
            <li><span className="text-red-500 mr-2">❌</span> Gamblers disguised as traders</li>
          </ul>
        </div>
        <div className="bg-green-900 bg-opacity-30 p-6 rounded-lg flex items-center justify-center border border-green-500">
          <div>
            <p className="text-2xl font-bold text-center"><span className="text-green-500 mr-2">✅</span> WARRIORS ONLY</p>
            <p className="text-center mt-2">Ready to transform mindset and master markets</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AudienceSection 