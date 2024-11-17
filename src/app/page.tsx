import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from- bg-green-400 to-green-700 text-white min-h-screen flex items-center justify-center px-4">
        <section className="text-center max-w-4xl bg-green-200 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-yellow-700 mb-4">
            Welcome to MyBank
          </h1>
          <img
            className="rounded-lg shadow-md mx-auto w-full max-h-96 object-cover"
            src="https://media.istockphoto.com/id/1224521920/photo/insurance-protecting-family-health-live-house-and-car-concept.jpg?s=612x612&w=0&k=20&c=_rrpkHAzF997K9swmvJ9C7OHxprCCQxHyDOYbXhZxOQ="
            alt="Mobile Banking Graphic"
          />
          <p className="mt-6 text-gray-700 text-lg">
            Your trusted partner in financial success.
          </p>
          <button className="mt-6 bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-200">
            Learn More
          </button>
        </section>
      </div>
    </Layout>
  );
}


