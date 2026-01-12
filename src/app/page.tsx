import { Hero } from "@/components/landing/hero"
import { ProblemSection } from "@/components/landing/problem-section"
import { IncidentProcessSection } from "@/components/landing/incident-process-section"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/forms/contact-form"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <IncidentProcessSection />

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-black border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl font-extralight text-white mb-3 sm:mb-4">
                  Let's talk about coverage
                </h2>
                <p className="text-base sm:text-lg text-white/70 font-extralight">
                  Reach out to discuss how we can help protect your brand
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
