import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-green-400 to-green-700 text-white min-h-screen py-10 px-4 flex items-center justify-center">
        <section className="max-w-4xl w-full bg-green-300 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-yellow-700 text-center">Contact Us</h1>
          <p className="text-center text-gray-600 mt-2 mb-8">
            Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-lg font-semibold text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-lg font-semibold text-gray-700">Message</label>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                     ></textarea>

            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
