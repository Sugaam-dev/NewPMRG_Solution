import sunset from "../../../assets/sunset.jpg";
import mvnosData from "../../../data/mvnosData";

import HeroSection from "../HeroSection";

// FINAL VERSION — FEATURES & MVNE SECTION MATCH FIRST-SCREENSHOT DESIGN

export default function Mvnos() {
  return (
   <>
   <HeroSection {...mvnosData}/>
    <main className="w-full overflow-x-hidden">

      {/* Launch Quickly Section */}
      <section className="w-full px-4 py-12 bg-[#fafbf8]">
        <div className="max-w-[900px] mx-auto mb-16 text-center">
          <h2 className="text-[32px] font-semibold font-['PST Mail Sans'] mb-6">
            Launch Quickly
          </h2>

          <p className="text-[20px] text-[#666] leading-[1.7]">
            MVNOs need to reach market fast to compete effectively. PMRG-Solution enables rapid deployment with
            pre-configured workflows, proven best practices, and seamless MVNE integration. Launch new mobile services
            in weeks instead of months with complete billing and customer management ready from day one.
          </p>
        </div>

        {/* Features Section – First Screenshot Design */}
        <div
          className="
            max-w-[1200px] mx-auto 
            bg-[#f4f8e8] rounded-3xl 
            p-10 
            grid grid-cols-1 md:grid-cols-3 gap-12
          "
        >
          {/* Feature 1 */}
          <div>
            <div className="w-10 h-10 mb-4 text-[#6fbf2b] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Flexible Product Management
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Consumer MVNO success requires product flexibility and speed. PMRG-Solution lets you create
              new pricing plans in minutes, design powerful discount campaigns effortlessly, and launch
              promotions in hours instead of weeks. Test market responses quickly and adapt offerings
              based on customer feedback without technical barriers.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <div className="w-10 h-10 mb-4 text-[#6fbf2b] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 3v18" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Efficient Billing Operations
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Billing complexity can overwhelm growing MVNOs. PMRG-Solution streamlines operations with
              smart invoicing, automated payment handling, and intelligent dunning processes. Near
              real-time usage data ensures transparency, enabling accurate billing while your team
              focuses on growth rather than reconciliation.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <div className="w-10 h-10 mb-4 text-[#6fbf2b] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Customer Management
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Comprehensive customer management tools handle the complete lifecycle from signup
              through service delivery and support. Self-service portals empower customers to manage
              accounts independently. Customer service representatives access complete information
              for efficient support. Automated workflows reduce manual work and improve consistency.
            </p>
          </div>
        </div>
      </section>

      {/* Seamless MVNE Integration Section – FIXED TO MATCH FIRST IMAGE */}
      <section className="w-full  bg-white pb-20 px-6 md:px-8 lg:px-30 ">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <div className="w-full">
            <img
              src={sunset}
              alt="Network tower at sunset"
              className="w-full h-auto object-cover rounded-[32px]"
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[40px] font-semibold leading-tight mb-6 text-[#111]">
              Seamless MVNE<br />Integration
            </h2>

            <p className="text-[20px] text-[#555] leading-[1.8] mb-2 max-w-[550px]">
              PMRG-Solution integrates seamlessly with MVNEs like CleverEnable for complete end-to-end 
              operations. Provisioning happens instantly when customers sign up or change plans. 
              Usage data flows continuously from network to billing. This integration eliminates 
              data synchronization headaches common with separate systems.
            </p>

            {/* <button
              className="
                bg-[#8dc100]
                text-white
                text-[18px]
                font-semibold
                px-10
                py-3.5
                rounded-full
                shadow-md
                hover:bg-[#7cb000]
                transition
                w-fit
              "
            >
              CleverEnable MVNE
            </button> */}
          </div>

        </div>
      </section>

      {/* Scale Confidently Section */}
      <section className="w-full bg-[#fafbf8] pb-5 px-6 md:px-8 lg:px-30">
        <div className="max-w-[900px] mx-auto text-center">
          <h2 className="text-[32px] font-semibold font-['PST Mail Sans'] mb-6">
            Scale Confidently
          </h2>

          <p className="text-[20px] text-[#666] leading-[1.7]">
            As your MVNO grows, PMRG-Solution scales effortlessly. The platform handles thousands of
            customers with the same efficiency as hundreds. Automated processes prevent operational
            bottlenecks. Add new products, channels, or markets without platform limitations
            constraining your ambitions.
          </p>
        </div>
      </section>

    </main>
   </>
  );
}
