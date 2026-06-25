export default function FooterBottom() {
  return (
    <div className="border-t border-white/10 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 text-center sm:text-left">
      <p>© {new Date().getFullYear()} Orizo Technologies. All rights reserved.</p>
      
    </div>
  );
}
