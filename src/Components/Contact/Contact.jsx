import React, { useRef} from 'react';
import { Animate } from 'react-simple-animate';
import emailjs from '@emailjs/browser'
import PageHeader from '../../Page/PageHeader';
import { BsInfoCircleFill } from 'react-icons/bs';
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pg4yfby', 'template_54dpe5c', form.current, {
          publicKey: 'eF4dvo3nRZsJ9smXd',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <section className="py-6 bg-[#000000] h-[700px] lg:h-[500px] text-white dark:bg-gray-800 dark:text-gray-50">
            <div className="ml-10 mr-10 py-4">
        <PageHeader
          headerText="Contact Me"
          icon={<BsInfoCircleFill size={40} />}
        />
       
      </div>
      <hr></hr>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
        <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold ">Get in touch</h1>
                <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                <div className="space-y-4">
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                        </svg>
                        <span>Khulna, Mollahat City</span>
                    </p>
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                        </svg>
                        <span>01758724236</span>
                    </p>
                    <p className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                        </svg>
                        <span>moincse022@gmail.com</span>
                    </p>
                </div>
            </div>
            </Animate>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(900px)",
            }}
            end={{
              transform: "translatex(-0px)",
            }}
          >
            <form ref={form} onSubmit={sendEmail} novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <label className="block">
                    <span className="mb-1 text-yellow-400">Full name</span>
                    <input type="text" name="from_name" placeholder="Write your name" className="block w-full h-12 border-2 rounded-md shadow-sm text-black" />
                </label>
                <label className="block text-yellow-400">
                    <span className="mb-1">Email address</span>
                    <input type="email" name="from_email" placeholder="Write your email" className="block w-full h-12 border-2 rounded-md shadow-sm text-black" />
                </label>
                <label className="block">
                    <span className="mb-1 text-yellow-400">Message</span>
                    <textarea rows="3" name="message" className="block w-full rounded-md text-black"></textarea>
                </label>
                <button type="submit" className=" btn btn-success self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
            </form>
            </Animate>
            {/* <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Contact Us</h2>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> */}
        </div>
    </section>
    );
};

export default Contact;