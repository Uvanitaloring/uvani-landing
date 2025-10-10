export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-blue-100 text-lg">
            At Uvani, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our
            website and services.
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Information We Collect */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
            </div>
            <p className="text-gray-600 ml-10">
              We may collect personal details such as your name, email, phone number, and payment
              information when you sign up or make a transaction on our platform.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
            </div>
            <ul className="text-gray-600 ml-10 space-y-2">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span>To create and manage your account</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span>To process payments and provide services</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span>To improve user experience and enhance our offerings</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  ✓
                </span>
                <span>To communicate updates, offers, or policy changes</span>
              </li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
            </div>
            <p className="text-gray-600 ml-10">
              We implement industry-standard security measures to protect your data. However, no online
              transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            </div>
            <p className="text-gray-600 ml-10">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:support@uvani.in" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                support@uvani.in
              </a>.
            </p>
          </section>
        </div>

        {/* Footer Note */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>
    </main>
  );
}