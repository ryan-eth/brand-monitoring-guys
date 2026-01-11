import { NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/validations/schemas"
import { sendContactEmail } from "@/lib/email/send"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate with Zod
    const validatedData = contactFormSchema.parse(body)

    // Send emails (confirmation to user + notification to team)
    await Promise.all([
      sendContactEmail.confirmation(validatedData),
      sendContactEmail.notification(validatedData),
    ])

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch (error: any) {
    console.error("Contact form error:", error)

    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 })
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
