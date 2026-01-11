import { Resend } from "resend"

// Initialize Resend with a placeholder key if not set (for build time)
// This allows the app to build without environment variables
export const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder_for_build")
