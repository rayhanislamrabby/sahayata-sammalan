"use client";

export default function PrivacySection() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you make a donation, register for our newsletter, or contact us directly. This includes your name, email address, phone number, and any payment information required for transaction processing."
    },
    {
      title: "2. How We Use Your Information",
      content: "Your data is used to process donations, send transaction receipts, provide updates on our social projects, and improve our website's user experience. We are committed to using your information only for organizational purposes."
    },
    {
      title: "3. Data Protection and Security",
      content: "We implement advanced security measures, including SSL encryption, to safeguard your sensitive data. Access to your personal information is strictly limited to authorized personnel who need the data to perform specific tasks."
    },
    {
      title: "4. Third-Party Sharing",
      content: "Sahayata Sammalan does not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential."
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Page Header */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-green-100 text-[#009661] rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            Legal Document
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase tracking-tighter leading-none mb-4">
            Privacy <span className="text-[#009661] italic">Policy</span>
          </h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">
            Effective Date: March 31, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="group">
              <h2 className="text-xl md:text-2xl font-black text-[#0F172A] uppercase tracking-tight mb-4 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-[#009661] group-hover:w-12 transition-all"></span>
                {section.title}
              </h2>
              <div className="bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Footer */}
        <div className="mt-20 p-10 bg-[#0F172A] rounded-[40px] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Have questions about your privacy?</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">Our legal team is here to help you understand how we protect your data.</p>
            <a 
              href="/contact" 
              className="bg-[#009661] hover:bg-white hover:text-[#009661] px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest transition-all inline-block shadow-xl"
            >
              Contact Privacy Team
            </a>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-12 right-12 w-40 h-40 bg-[#009661] rounded-full blur-[80px] opacity-20"></div>
        </div>
      </div>
    </section>
  );
}