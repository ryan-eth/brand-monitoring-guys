import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from "@react-email/components"
import type { ContactFormData } from "@/types/contact"

export function ContactNotificationEmail(data: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {data.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>

          <Section style={section}>
            <Text style={label}>Name:</Text>
            <Text style={value}>{data.name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email:</Text>
            <Text style={value}>{data.email}</Text>
          </Section>

          {data.company && (
            <Section style={section}>
              <Text style={label}>Company:</Text>
              <Text style={value}>{data.company}</Text>
            </Section>
          )}

          <Section style={section}>
            <Text style={label}>Message:</Text>
            <Text style={messageText}>{data.message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#f6f6f6",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif',
}

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  borderRadius: "8px",
}

const h1 = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "30px",
}

const section = {
  marginBottom: "24px",
}

const label = {
  color: "#666666",
  fontSize: "14px",
  fontWeight: "600",
  marginBottom: "4px",
}

const value = {
  color: "#333333",
  fontSize: "16px",
  marginTop: "4px",
}

const messageText = {
  color: "#333333",
  fontSize: "16px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
  marginTop: "4px",
}
