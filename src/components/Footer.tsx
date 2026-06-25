import FooterBrand from "@/components/footer/FooterBrand";
import FooterLinks from "@/components/footer/FooterLinks";
import FooterBottom from "@/components/footer/FooterBottom";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7fa] pt-20 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0d1b2a] rounded-3xl shadow-2xl overflow-hidden text-gray-400">

          {/* main columns */}
          <div className="px-6 sm:px-10 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <FooterBrand />
            <div className="lg:col-span-2">
              <FooterLinks />
            </div>
          </div>

          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}
