import React, {useRef} from 'react'
import emailjs from "@emailjs/browser";



const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  
  
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
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name='user_name'
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name='user_email'
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <textarea 
              name='message'
              placeholder="Your Message"
              rows="4"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              value="Send"
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