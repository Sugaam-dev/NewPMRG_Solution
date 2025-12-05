import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';


const ContactPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="pt-40 pb-40 text-center flex flex-col items-center justify-center bg-gradient-to-br from-[#0b1f6b] via-[#040b2d] to-[#071028]">
        <span className="text-sm uppercase tracking-[0.2em] text-[#a3bffa] mb-2">
          contact
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
          We'd like to hear from you
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-slate-200 leading-relaxed px-4">
          Discover how CleverMobi can transform your business. Reach out with your questions or requests,
          and our experts will swiftly assist you.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-transparent text-[#111827]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          {/* TOP ROW: Phone + Email */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Phone block */}
            <div className="space-y-2 max-w-md">
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <Phone className="w-4 h-4" />
                <span>Phone number</span>
              </div>
              <Link
                href="tel:+91-7722017100"
                className="block text-base font-semibold text-[#111827]"
              >
              +91-7722017100
              </Link>
              <p className="text-xs leading-relaxed text-[#4b5563]">
                We are available Monday through Friday between 8:30 and 17:30 (CET/CEST).
                For urgent inquiries, our phone number is accessible 24/7.
              </p>
            </div>

            {/* Email block */}
            <div className="space-y-2 max-w-md md:ml-auto">
              <div className="flex items-center gap-2 text-blue-600 text-sm">
                <Mail className="w-4 h-4" />
                <span>E-mail</span>
              </div>
              <Link
                href="mailto:admin@pmrgsolution.com"
                className="block text-base font-semibold text-[#111827]"
              >
               admin@pmrgsolution.com
              </Link>
            </div>
          </div>

          {/* OUR OFFICE + MAP */}
          <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-12 items-start mb-20">
            {/* Left: office text */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Our office</h2>

              {/* Visitor address */}
              <div className="space-y-2 text-sm leading-relaxed">
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Visitor address</span>
                </div>
                <p className="text-[#111827]">
                  E2-103, Sr No-296,Revell Orchid, Porwal Pune City, Pune-411047.
                </p>
                <p className="text-[#4b5563]">
                  Free visitor parking is available behind our office.<br />
                  Electric vehicle charging is available.
                </p>
              </div>

              {/* Postal address */}
              <div className="space-y-2 text-sm leading-relaxed pt-4">
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Postal address</span>
                </div>
                <p className="text-[#111827]">
               E2-103, Sr No-296,Revell Orchid, Porwal Pune City, Pune-411047.
                </p>
              </div>
            </div>

            {/* Right: embedded map */}
            <div className="w-full h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-xl overflow-hidden border border-[#e5e7eb]">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3781.1567943843306!2d73.9097688!3d18.6120161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6ed4e08f8ef%3A0x1825cfb7c4c14edf!2sREVELL%20ORCHID%2C%20Porwal%20Rd%2C%20Lohegaon%2C%20Pune%2C%20Maharashtra%20411047!5e0!3m2!1sen!2sin!4v1764918388777!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* BOTTOM ROW: company card + image */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Company details card */}
            <div className="bg-[#f0f2e6] rounded-3xl px-10 py-8 text-sm leading-relaxed w-full">
              <div className="grid grid-cols-2 gap-10 mb-6">
                <div>
                  <h3 className="font-semibold mb-1">Company details</h3>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6b7280] mb-1">
                    Company name
                  </p>
                  <p className="font-medium text-[#111827]">
                    PMRG-Solution
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6b7280] mb-1">
                    CoC number
                  </p>
                  <p className="text-[#111827]">xxxxx</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#6b7280] mb-1">
                    VAT number
                  </p>
                  <p className="text-[#111827]">xxxxxxxxxx</p>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="flex justify-end">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg"
                  alt="Team at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
