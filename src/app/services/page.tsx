import Layout from '../components/Layout';

export default function Services() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-400 to-green-700 text-white min-h-screen py-10 px-4">
        <section className="text-center max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 text-yellow-700">Our Services</h1>
          <p className="text-lg text-gray-250 mb-10">
            Explore a wide range of services tailored to meet your financial needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-green-300 text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Loans</h2>
              <p className="text-gray-600">
                Flexible loan options for personal and business needs.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="bg-green-300 text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Savings</h2>
              <p className="text-gray-600">
                High-interest savings accounts to grow your wealth.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="bg-green-300 text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Credit Cards</h2>
              <p className="text-gray-600">
                Credit options with great rewards and cashback.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="bg-green-300 text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Investments</h2>
              <p className="text-gray-600">
                Reliable investment plans for a secure future.
              </p>
            </div>
            {/* Service Card 5 */}
            <div className="bg-green-300 text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Insurance</h2>
              <p className="text-gray-600">
                Comprehensive insurance coverage for peace of mind.
              </p>
            </div>
            {/* Service Card 6 */}
            <div className="bg-green-300 text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h2 className="text-2xl font-bold text-yellow-700 mb-2">Wealth Management</h2>
              <p className="text-gray-600">
                Expert advice to manage and grow your wealth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

  
