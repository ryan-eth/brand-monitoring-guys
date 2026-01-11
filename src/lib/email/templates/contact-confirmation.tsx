import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components"

interface ContactConfirmationEmailProps {
  name: string
}

export function ContactConfirmationEmail({ name }: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Brand Monitoring Guys</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank you for reaching out!</Heading>
          <Text style={text}>
            Hi {name}, we&apos;ve received your message and will get back to you within 24 hours.
          </Text>
          <Text style={text}>
            In the meantime, feel free to explore our resources and learn more about how we help
            protect brands from impersonation and scams.
          </Text>
          <Text style={footer}>
            Best regards,
            <br />
            The Brand Monitoring Guys Team
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: "#0a0a0a",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif',
}

const container = {
  backgroundColor: "#121212",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
  borderRadius: "8px",
}

const h1 = {
  color: "#a855f7",
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "20px",
}

const text = {
  color: "#fafafa",
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "16px",
}

const footer = {
  color: "#999999",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "32px",
}
