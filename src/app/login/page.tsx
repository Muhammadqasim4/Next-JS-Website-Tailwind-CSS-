import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-700">
        <section className="bg-green-300 p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
          <h1 className="text-4xl font-bold text-yellow-700 text-center mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-center mb-6">Log in to access your account</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-gray-500 text-center mt-4">Forgot your password? <a href="#" className="text-yellow-600 hover:underline">Reset it here</a></p>
        </section>
      </div>
    </Layout>
  );
}


