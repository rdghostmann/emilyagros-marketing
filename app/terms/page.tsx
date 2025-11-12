import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <div className="container mx-auto px-4 py-24 md:py-32 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using Emilyagros platform, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Service</h2>
            <p className="leading-relaxed">
              Emilyagros provides an online marketplace for agricultural products. Users must be at least 18 years old
              to use our services. You are responsible for maintaining the confidentiality of your account information
              and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Product Listings</h2>
            <p className="leading-relaxed">
              Sellers are responsible for the accuracy of their product listings, including descriptions, prices, and
              availability. Emilyagros reserves the right to remove any listing that violates our policies or applicable
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Transactions</h2>
            <p className="leading-relaxed">
              All transactions conducted through Emilyagros are between buyers and sellers. While we facilitate the
              transaction process, we are not a party to the actual sale. Payment processing is handled securely through
              our approved payment partners.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Prohibited Activities</h2>
            <p className="leading-relaxed">
              Users may not engage in fraudulent activities, misrepresent products, violate intellectual property
              rights, or use the platform for any illegal purposes. Violation of these terms may result in account
              suspension or termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Emilyagros shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the platform after changes
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms & Conditions, please contact us at info@emilyagros.com
            </p>
          </section>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  )
}
