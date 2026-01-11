import { Hero } from "@/components/landing/hero"
import { CustomerLogos } from "@/components/landing/customer-logos"
import { ContactForm } from "@/components/forms/contact-form"

export default function HomePage() {
  return (
    <>
      <Hero />
      <CustomerLogos />
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
