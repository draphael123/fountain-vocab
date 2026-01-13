import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink-900 text-center">
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Lexicon Daily (&quot;the Service&quot;), you agree to be bound
                by these Terms of Service. If you do not agree to these terms, please do not use
                the Service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                2. Description of Service
              </h2>
              <p>
                Lexicon Daily provides a vocabulary learning platform that delivers one word per day
                along with definitions, examples, and tools to help users expand their English
                vocabulary. The Service includes a website and browser extension.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                3. User Accounts
              </h2>
              <p>
                To access certain features of the Service, you must create an account. You are
                responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
              <p className="mt-4">
                You must provide accurate and complete information when creating your account.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                4. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use the Service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to the Service</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Scrape or collect data from the Service without permission</li>
                <li>Share your account credentials with others</li>
                <li>Use automated systems to access the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                5. Intellectual Property
              </h2>
              <p>
                The Service and its content, including but not limited to text, graphics, logos,
                and software, are owned by Lexicon Daily and are protected by copyright and other
                intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, or create derivative works from any content
                without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                6. User Content
              </h2>
              <p>
                When you submit sentences or other content to the Service, you grant Lexicon Daily
                a non-exclusive, royalty-free license to use, store, and display that content as
                necessary to provide the Service.
              </p>
              <p className="mt-4">
                You retain ownership of your content and are responsible for ensuring it does not
                violate any laws or third-party rights.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                7. Browser Extension
              </h2>
              <p>
                The Lexicon Daily browser extension operates under these same terms. By installing
                the extension, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Allow the extension to access webpage content for highlighting purposes</li>
                <li>Receive notifications (if enabled)</li>
                <li>Have the extension communicate with our servers to fetch daily words</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                8. Service Availability
              </h2>
              <p>
                We strive to maintain high availability but do not guarantee uninterrupted access
                to the Service. We reserve the right to modify, suspend, or discontinue any part of
                the Service at any time.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                9. Disclaimer of Warranties
              </h2>
              <p>
                The Service is provided &quot;as is&quot; without warranties of any kind, either
                express or implied. We do not warrant that the Service will be error-free or that
                any defects will be corrected.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                10. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Lexicon Daily shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your
                use of the Service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                11. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will notify you of significant
                changes by email or through the Service. Continued use of the Service after changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                12. Termination
              </h2>
              <p>
                We may terminate or suspend your account at any time for violation of these Terms
                or for any other reason. Upon termination, your right to use the Service will
                immediately cease.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-ink-900 mb-4">
                13. Contact Information
              </h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@lexicondaily.com
              </p>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

