import LegalPage from "@/components/shared/LegalPage";

export const metadata = { title: "Disclaimer — ORIZO TECHNOLOGIES" };

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" lastUpdated="June 24, 2026">
      <h2>Website Information</h2>
      <p>The information provided on the Orizo Technologies website is for general informational purposes only. While we strive to keep all content accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, or reliability of the information.</p>

      <h2>No Professional Advice</h2>
      <p>Nothing on this website constitutes professional legal, financial, or technical advice. Any reliance you place on the information is strictly at your own risk. Please consult a qualified professional for advice specific to your situation.</p>

      <h2>External Links</h2>
      <p>Our website may contain links to third-party websites. These links are provided for convenience only. Orizo Technologies has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>

      <h2>Results and Performance</h2>
      <p>Case studies, statistics, and client results mentioned on this website are illustrative and may not reflect typical outcomes. Individual results will vary based on specific circumstances, effort, and other factors.</p>

      <h2>Availability</h2>
      <p>Orizo Technologies does not guarantee uninterrupted or error-free access to this website. We reserve the right to modify or discontinue any part of the site without notice.</p>
    </LegalPage>
  );
}
