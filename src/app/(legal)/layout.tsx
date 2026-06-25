// Legal pages get no navbar or footer — LegalPage component handles its own chrome
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
