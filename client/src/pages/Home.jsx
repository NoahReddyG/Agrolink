const Home = () => {
  return (
    <div className="text-center py-10">
      <div className="bg-brand-50 p-12 rounded-[2rem] shadow-sm mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-400 to-brand-600"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-green-400">Agrolink AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          Empowering small farmers to connect directly with buyers, ensuring fair prices and transparent logistics.
        </p>
        <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
          Explore Products
        </button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-12 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-50 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Direct Selling</h3>
          <p className="text-gray-500 leading-relaxed">Bypass intermediaries and sell your organic crops directly to conscious consumers.</p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-50 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">AI Predictions</h3>
          <p className="text-gray-500 leading-relaxed">Get powerful data-driven price forecasts for your crops based on real-time market data.</p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-50 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Payments</h3>
          <p className="text-gray-500 leading-relaxed">Experience safe, fast, and completely transparent transactions via UPI and Cards.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
