import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 text-center">
            Privacy Policy
          </h1>
          <p className="mt-4 text-ink-500 text-center">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 pb-24">
        <div className="container-narrow">
          <article className="prose-custom text-lg space-y-8">
            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Our Commitment to Privacy
              </h2>
              <p>
                Lexicon Daily is committed to protecting your privacy. This policy explains what
                information we collect, how we use it, and your rights regarding your data.
              </p>
              <p>
                We believe in transparency and minimal data collection. We only collect what we
                need to provide our service, and we never sell your data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Information We Collect
              </h2>
              <h3 className="font-semibold text-ink-800 mt-6 mb-2">Account Information</h3>
              <p>
                When you create an account, we collect your email address and name. This
                information is used to identify your account and communicate with you about your
                vocabulary progress.
              </p>

              <h3 className="font-semibold text-ink-800 mt-6 mb-2">Usage Data</h3>
              <p>We collect information about your vocabulary learning activity, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Which words you&apos;ve marked as used</li>
                <li>Sentences you write using daily words</li>
                <li>Your current and longest streak</li>
                <li>Dates of activity</li>
              </ul>
              <p className="mt-4">
                This data is essential for providing your dashboard, tracking your progress, and
                maintaining your streak.
              </p>

              <h3 className="font-semibold text-ink-800 mt-6 mb-2">Browser Extension Data</h3>
              <p>
                Our browser extension accesses webpage content solely to identify and highlight
                today&apos;s vocabulary word. We do not collect, store, or transmit information
                about the websites you visit. All highlighting happens locally in your browser.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide and maintain the Lexicon Daily service</li>
                <li>Track your vocabulary learning progress</li>
                <li>Calculate and display your streak</li>
                <li>Store your sentence history</li>
                <li>Send optional reminder notifications (if enabled)</li>
                <li>Communicate important service updates</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Data Storage and Security
              </h2>
              <p>
                Your data is stored securely using industry-standard encryption and security
                practices. We use secure HTTPS connections for all data transmission.
              </p>
              <p>
                Account passwords are hashed using bcrypt and are never stored in plain text.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Data Sharing
              </h2>
              <p>
                <strong>We do not sell your data.</strong> We do not share your personal
                information with third parties for marketing purposes.
              </p>
              <p>We may share data only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights or the safety of users</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and associated data</li>
                <li>Export your data</li>
                <li>Opt out of non-essential communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@lexicondaily.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Cookies
              </h2>
              <p>
                We use essential cookies to maintain your session and remember your preferences.
                We do not use tracking cookies or third-party analytics that identify individual
                users.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                Lexicon Daily is not directed at children under 13. We do not knowingly collect
                personal information from children under 13. If you believe we have inadvertently
                collected such information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any
                significant changes by email or through the service. The date at the top of this
                page indicates when the policy was last updated.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this privacy policy or our data practices, please
                contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@lexicondaily.com
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

