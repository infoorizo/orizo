import LegalPage from "@/components/shared/LegalPage";

export const metadata = { title: "Terms and Conditions — ORIZO TECHNOLOGIES" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" lastUpdated="June 24, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using the Orizo Technologies website or services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

      <h2>2. Services</h2>
      <p>Orizo Technologies provides software development, AI solutions, cloud services, cybersecurity, and digital transformation services. Specific terms for each engagement are governed by the signed service agreement between Orizo Technologies and the client.</p>

      <h2>3. Intellectual Property</h2>
      <p>All content on this website — including text, graphics, logos, and code — is the intellectual property of Orizo Technologies unless otherwise stated. You may not reproduce or distribute any content without prior written permission.</p>

      <h2>4. Client Deliverables</h2>
      <p>Upon full payment, clients receive ownership of custom deliverables as specified in their service agreement. Orizo Technologies retains the right to use anonymised project details for portfolio and marketing purposes unless otherwise agreed.</p>

      <h2>5. Limitation of Liability</h2>
      <p>Orizo Technologies is not liable for indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the amount paid for the specific service in question.</p>

      <h2>6. Confidentiality</h2>
      <p>Both parties agree to keep confidential any proprietary information shared during the course of an engagement. This obligation survives termination of the service agreement.</p>

      <h2>7. Changes to Terms</h2>
      <p>We reserve the right to update these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
    </LegalPage>
  );
}
