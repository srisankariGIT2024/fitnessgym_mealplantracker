import { HandRaisedIcon, LinkIcon } from '@heroicons/react/24/outline'; // Other imports
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons
import { useState } from 'react';
import Axios from 'axios';
export default function GetStarted() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailID] = useState('');
  const [mobileNum, setMobileNum] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('http://localhost:5000/getStartedData', {
      firstname: firstName,
      lastname: lastName,
      emailid: emailId,
      mobilenum: mobileNum
    })
      .then((response) => {
        console.log("Data submitted successfully:", response);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("There was an error submitting the data:", error);
        alert("An error occurred while submitting the form. Please try again.");
        if (error.response) {
          // Error response from backend
          console.log("Backend response error:", error.response.data);
        } else if (error.request) {
          // Request made but no response
          console.log("No response received:", error.request);
        } else {
          // Something else went wrong
          console.log("Error message:", error.message);
        }
      });
  }



  return (

    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">Get fit with me</h2>
            <p className="mt-4 text-lg text-gray-300">
              The best way to predict your future is to create it—let's get fit together!.
            </p>
            <div className="mt-6 max-w-md gap-x-4">
              <form onSubmit={handleSubmit}>
                <label htmlFor="first-name" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your first name"
                  className="block min-w-0 w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm mb-4"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                />
                <input
                  type="text"
                  required
                  placeholder="Enter your last name"
                  className="block min-w-0 w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm mb-4"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value) }}
                />
                <input
                  type="email"
                  required
                  placeholder="Enter our email"
                  autoComplete="email"
                  className="block min-w-0 w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm mb-4"
                  value={emailId}
                  onChange={(e) => { setEmailID(e.target.value) }}
                />
                <input
                  type="text"
                  required
                  placeholder="Enter your mobile number"
                  className="block min-w-0 w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm mb-4"
                  value={mobileNum}
                  onChange={(e) => { setMobileNum(e.target.value) }}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md mt-2 bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Privacy & Terms</dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                <ul>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Important Note!</a></li>
                </ul>
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <LinkIcon aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Quick Links</dt>
              <dd className="mt-2 text-base/7 text-gray-400">Know about me</dd>

              {/* Social Media Icons */}
              <div className="mt-6 flex space-x-4">
                <a href="https://twitter.com" className="text-white hover:text-indigo-500">
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="https://facebook.com" className="text-white hover:text-indigo-500">
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" className="text-white hover:text-indigo-500">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-white hover:text-indigo-500">
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}