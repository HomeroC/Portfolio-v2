import React from 'react'


function Contact() {
  return (
    <section id="contact" className="bg-gray-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Contact Me
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-lg text-gray-600 mb-4">
            Have a question or want to get in touch? Feel free to reach out to
            me via the form below:
          </p>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact