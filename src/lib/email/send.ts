import { resend } from "./resend"
import { ContactConfirmationEmail } from "./templates/contact-confirmation"
import { ContactNotificationEmail } from "./templates/contact-notification"
import type { ContactFormData } from "@/lib/validations/schemas"

export const sendContactEmail = {
  confirmation: async (data: ContactFormData) => {
    if (!process.env.CONTACT_EMAIL_FROM) {
      throw new Error("CONTACT_EMAIL_FROM is not set")
    }

    return await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: data.email,
      subject: "We've received your message",
      react: ContactConfirmationEmail({ name: data.name }),
    })
  },

  notification: async (data: ContactFormData) => {
    if (!process.env.CONTACT_EMAIL_TO || !process.env.CONTACT_EMAIL_FROM) {
      throw new Error("CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM is not set")
    }

    return await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New contact from ${data.name}`,
      react: ContactNotificationEmail(data),
    })
  },
}
