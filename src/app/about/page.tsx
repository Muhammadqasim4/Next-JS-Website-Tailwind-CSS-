import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-from- bg-green-400 to-green-700 text-white px-4">
        <section className="bg-green-200 text-gray-800 p-8 rounded-lg shadow-lg max-w-2xl w-full text-center">
          <h1 className="text-4xl font-extrabold text-yellow-700 mb-4">About Us</h1>
          <p className="text-lg leading-relaxed">
            At <span className="font-semibold text-yellow-600">MyBank</span>, we are committed to empowering individuals and businesses by providing secure, innovative, and reliable financial solutions. Our journey is guided by a mission to build lasting relationships, driven by trust, integrity, and a dedication to helping our clients achieve their financial goals. Join us as we continue to shape the future of banking with values that put people first.
          </p>
        </section>
      </div>
    </Layout>
  );
}

