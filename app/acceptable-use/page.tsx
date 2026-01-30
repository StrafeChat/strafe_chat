import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AcceptableUsePolicy() {
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

        <h1 className="text-4xl font-bold text-white mb-4">
          Acceptable Use Policy
        </h1>
        <p className="text-neutral-400 mb-12">Last updated: July 2025</p>

        <div className="prose prose-invert prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Our Commitment to Free Speech
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              <strong>
                Strafe is built on the principle that free expression is
                fundamental to human communication.
              </strong>{" "}
              We believe in the marketplace of ideas, where good ideas triumph
              over bad ones through open debate, not censorship.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Our content moderation philosophy is guided by the First Amendment
              to the United States Constitution, and we will only restrict
              content that falls outside constitutional protection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Prohibited Content
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              The following types of content are prohibited on our platform:
            </p>

            <h3 className="text-2xl font-semibold mb-2">Illegal Content</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Content that violates federal, state, or local laws</li>
              <li>
                Copyright infringement and intellectual property violations
              </li>
              <li>Distribution of illegal substances or services</li>
              <li>Child exploitation material of any kind</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Adult Content</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                NSFW (Not Safe For Work) content including explicit sexual
                imagery
              </li>
              <li>Pornographic material or sexually explicit content</li>
              <li>Adult content that is not properly age-gated or marked</li>
              <li>Content depicting nudity or sexual acts</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">
              Direct Threats and Harassment
            </h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                Specific, credible threats of violence against identifiable
                individuals
              </li>
              <li>
                Doxxing (sharing private personal information without consent)
              </li>
              <li>
                Coordinated harassment campaigns targeting specific individuals
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Platform Integrity</h3>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Spam, including excessive automated or repetitive content</li>
              <li>Malware, viruses, or other malicious code</li>
              <li>Phishing attempts or fraudulent schemes</li>
              <li>Impersonation intended to deceive others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. What We Do Not Moderate
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              Unlike many platforms, we explicitly <strong>do not</strong>{" "}
              moderate content based on:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Political opinions or ideological viewpoints</li>
              <li>Controversial or unpopular speech</li>
              <li>Offensive language or profanity</li>
              <li>Criticism of public figures, organizations, or ideas</li>
              <li>Discussion of sensitive or taboo topics</li>
              <li>Satire, parody, or humor that some may find offensive</li>
              <li>Religious or philosophical beliefs</li>
              <li>Scientific or academic debate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Community Self-Moderation
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We believe communities should have the tools to moderate
              themselves:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                Space owners can set their own rules and moderate their spaces
              </li>
              <li>
                Users can block or mute other users they don't want to interact
                with
              </li>
              <li>
                Content filtering tools allow users to customize their
                experience
              </li>
              <li>
                Community reporting helps identify genuine policy violations
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Enforcement Actions
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              When content violates this policy, we may take the following
              actions:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                <strong>Content Removal:</strong> Removing specific content that
                violates our policies
              </li>
              <li>
                <strong>Account Warnings:</strong> Notifying users of policy
                violations
              </li>
              <li>
                <strong>Temporary Restrictions:</strong> Limiting account
                functionality for repeated violations
              </li>
              <li>
                <strong>Account Suspension:</strong> Temporarily disabling
                accounts for serious violations
              </li>
              <li>
                <strong>Account Termination:</strong> Permanently banning
                accounts for severe or repeated violations
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Appeals Process
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              We believe in due process and provide a fair appeals system:
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>All enforcement actions can be appealed</li>
              <li>
                Appeals are reviewed by human moderators, not automated systems
              </li>
              <li>We provide clear explanations for our decisions</li>
              <li>False positives are corrected promptly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Transparency
            </h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Regular transparency reports on enforcement actions</li>
              <li>Clear communication about policy changes</li>
              <li>
                Open dialogue with the community about moderation decisions
              </li>
              <li>Public documentation of our moderation guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Legal Compliance
            </h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                Court orders and subpoenas will be honored where legally
                required
              </li>
              <li>
                We will notify users of legal requests when legally permitted
              </li>
              <li>
                We will challenge overly broad or inappropriate legal requests
              </li>
              <li>We maintain detailed records of legal compliance actions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. International Considerations
            </h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>
                Content legal in the U.S. may be illegal in other jurisdictions
              </li>
              <li>
                We cannot guarantee compliance with all international laws
              </li>
              <li>Users are responsible for understanding their local laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Reporting Violations
            </h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Use the in-app reporting tools</li>
              <li>Contact our support team with specific details</li>
              <li>Provide evidence and context for your report</li>
              <li>Be patient as we review reports thoroughly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Policy Updates
            </h2>
            <ul className="list-disc list-inside text-neutral-400 space-y-2">
              <li>Provide advance notice of significant changes</li>
              <li>Explain the reasoning behind policy updates</li>
              <li>Maintain our commitment to free speech principles</li>
              <li>Seek community input on major policy changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              12. Contact Information
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              For questions about this Acceptable Use Policy or to report
              violations, please contact us through our support channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
