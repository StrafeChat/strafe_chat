import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[hsl(0,0%,6%)] text-white">
      <Link
        href="/"
        className="absolute top-6 left-6 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors z-20"
      >
        <ArrowLeft className="size-4" />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-neutral-400 mb-12">Last updated: July 2025</p>

        <div className="prose prose-invert prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-white mb-2">
              Account Information
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              When you create an account, we collect your username, email
              address, date of birth (for age verification), and password (which
              is securely hashed and never stored in plain text).
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Communication Data
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              We store messages, files, and other content you share through our
              service to provide the communication functionality.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Session and Security Information
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              We collect encrypted IP addresses for user sessions and logins to
              maintain security, prevent abuse, and provide account protection.
              This information helps us detect suspicious activity and secure
              your account.
            </p>

            <h3 className="text-lg font-semibold text-white mb-2">
              Usage Information
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              We collect information about how you use our service, including
              login times, feature usage, and technical data for service
              improvement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>To provide and maintain our communication services</li>
              <li>To authenticate your identity and secure your account</li>
              <li>To improve our service and develop new features</li>
              <li>To communicate with you about service updates</li>
              <li>To ensure compliance with our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Data Security
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your
              data:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                <strong>Password Security:</strong> All passwords are securely
                hashed using industry-standard algorithms and never stored in
                plain text
              </li>
              <li>
                <strong>IP Address Protection:</strong> IP addresses are
                encrypted before storage to protect your privacy while
                maintaining security functionality
              </li>
              <li>
                <strong>Encryption:</strong> All data is encrypted in transit
                and at rest
              </li>
              <li>
                <strong>Access Controls:</strong> Strict access controls limit
                who can view your data
              </li>
              <li>
                <strong>Regular Audits:</strong> We regularly audit our security
                practices
              </li>
              <li>
                <strong>Secure Infrastructure:</strong> Our servers are hosted
                in secure, monitored facilities
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Data Sharing and Disclosure
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              <strong>We do not sell your personal data.</strong> We may share
              information only in these limited circumstances:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>With your explicit consent</li>
              <li>
                To comply with valid legal requests (court orders, subpoenas)
              </li>
              <li>To protect against fraud or security threats</li>
              <li>
                With service providers who help us operate our platform (under
                strict confidentiality agreements)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Data Retention
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We retain your data for as long as your account is active or as
              needed to provide services. You may request deletion of your
              account and associated data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Your Rights and Choices
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Access the personal data we have about you</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Cookies and Tracking
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We use essential cookies to maintain your session and provide core
              functionality. We do not use tracking cookies for advertising
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Third-Party Services
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Our service may integrate with third-party services (such as file
              hosting). These services have their own privacy policies, and we
              encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. International Data Transfers
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Your data may be processed in countries other than your own. We
              ensure appropriate safeguards are in place for international
              transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Age Verification and Children's Privacy
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We collect date of birth during registration for age verification
              purposes. Our service is not intended for children under 13. We do
              not knowingly collect personal information from children under 13.
              If we discover that a child under 13 has provided us with personal
              information, we will delete such information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We may update this privacy policy from time to time. We will
              notify you of significant changes through the service or via
              email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Contact Us
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              If you have questions about this Privacy Policy or want to
              exercise your rights, please contact us through our support
              channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
