import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[hsl(0,0%,6%)] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-20"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>

        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-neutral-400 mb-12">Last updated: July 2025</p>

        <div className="prose prose-invert prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-neutral-400 leading-relaxed">
              By accessing and using Strafe, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p className="text-neutral-400 leading-relaxed">
              Strafe is a communication platform that provides real-time messaging, voice, and video chat services organized into spaces and rooms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. User Accounts</h2>
            <p className="text-neutral-400 leading-relaxed">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Free Speech Commitment</h2>
            <p className="text-neutral-400 leading-relaxed">
              <strong>Strafe is committed to supporting free speech within the bounds of the United States Constitution.</strong> We believe in open dialogue and the free exchange of ideas. Content moderation will be limited to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Content that is illegal under U.S. federal law</li>
              <li>Direct threats of violence against specific individuals</li>
              <li>Doxxing (sharing private personal information without consent)</li>
              <li>Spam or malicious automated content</li>
            </ul>
            <p className="text-neutral-400 leading-relaxed">
              We will not moderate content based on political opinions, controversial viewpoints, or unpopular speech that is otherwise legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. User Conduct</h2>
            <p className="text-neutral-400 leading-relaxed">
              While we support free expression, users agree not to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Use the service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to other accounts or systems</li>
              <li>Distribute malware or engage in phishing</li>
              <li>Impersonate others in a deceptive manner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Privacy and Data</h2>
            <p className="text-neutral-400 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
            <p className="text-neutral-400 leading-relaxed">
              Users retain ownership of content they create. By posting content, you grant Strafe a license to display and distribute that content within the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Service Availability</h2>
            <p className="text-neutral-400 leading-relaxed">
              We strive to maintain service availability but cannot guarantee uninterrupted access. We reserve the right to modify or discontinue features with notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-neutral-400 leading-relaxed">
              Strafe shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h2>
            <p className="text-neutral-400 leading-relaxed">
              We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
            <p className="text-neutral-400 leading-relaxed">
              If you have questions about these Terms of Service, please contact us through our support channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
