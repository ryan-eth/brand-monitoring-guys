# Brand Monitoring Guys - Website

A professional landing page and website for Brand Monitoring Guys, built with Next.js 15, React 19, and TypeScript. The site helps attract clients by showcasing brand protection and monitoring services.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: shadcn/ui
- **Blog CMS**: Notion API
- **Email**: Resend + react-email
- **Hosting**: Vercel (recommended)
- **Version Control**: Git + GitHub

## 📁 Project Structure

```
brand-monitoring-guys/
├── src/
│   ├── app/
│   │   ├── (marketing)/         # Public-facing pages
│   │   │   ├── layout.tsx      # Marketing layout with navbar/footer
│   │   │   ├── page.tsx        # Landing page
│   │   │   └── blog/           # Blog pages
│   │   ├── api/                # API routes
│   │   │   └── contact/        # Contact form endpoint
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── landing/            # Landing page components
│   │   ├── blog/               # Blog components
│   │   ├── forms/              # Form components
│   │   ├── layout/             # Layout components (navbar, footer)
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/
│   │   ├── notion/             # Notion API integration
│   │   ├── email/              # Email templates and utilities
│   │   ├── validations/        # Zod schemas
│   │   └── utils.ts            # Utility functions
│   └── types/                  # TypeScript types
├── public/
│   └── logos/                  # Customer logos (SVG)
├── .env.local                  # Environment variables (not committed)
├── .env.example                # Environment variables template
├── components.json             # shadcn/ui configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## 🎨 Features

### Landing Page
- Dark theme with purple accent colors (#a855f7)
- Responsive hero section with animated gradient
- Customer logos showcase
- Contact form with email automation
- Mobile-friendly navigation

### Blog System
- Notion-powered CMS (no code deployments for blog posts)
- Markdown rendering with syntax highlighting
- ISR (Incremental Static Regeneration) for performance
- SEO-optimized pages with metadata

### Contact Form
- Form validation with Zod
- Automated confirmation emails to users
- Notification emails to team
- Professional email templates matching brand

### Future-Ready
- Prepared API structure for domain scanning micro app
- Modular component architecture for easy expansion
- TypeScript for type safety

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Notion account (for blog)
- Resend account (for emails)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/brand-monitoring-guys.git
cd brand-monitoring-guys
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```bash
# Notion CMS
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_database_id

# Resend Email
RESEND_API_KEY=your_resend_api_key

# Email Configuration
CONTACT_EMAIL_TO=your_email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📝 Setting Up Notion CMS

### 1. Create a Notion Database

Create a new database in Notion with the following properties:

| Property Name | Type | Required | Description |
|--------------|------|----------|-------------|
| Title | Title | ✅ | Blog post title |
| Slug | Rich Text | ✅ | URL-friendly identifier (e.g., "my-first-post") |
| Published | Checkbox | ✅ | Controls visibility (only checked posts appear) |
| Published Date | Date | ✅ | Publication date |
| Excerpt | Rich Text | ✅ | Short description (150-200 characters) |
| Cover Image | Files | ❌ | Featured image URL |
| Author | Rich Text | ❌ | Author name |
| Tags | Multi-select | ❌ | Categories/topics |

### 2. Get Your Notion API Key

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "+ New integration"
3. Give it a name (e.g., "Brand Monitoring Guys Blog")
4. Select the workspace
5. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`

### 3. Share Your Database

1. Open your Notion database
2. Click "Share" in the top right
3. Invite your integration by name
4. Copy the database ID from the URL:
   - URL: `https://notion.so/DATABASE_ID?v=...`
   - This is your `NOTION_DATABASE_ID`

### 4. Create Your First Post

1. Add a new page to your database
2. Fill in all required fields:
   - Title: "Welcome to Our Blog"
   - Slug: "welcome-to-our-blog"
   - Published: ✅ (checked)
   - Published Date: Today's date
   - Excerpt: "Learn about our brand protection services..."
3. Write your content in the page body
4. Save and check your website at `/blog`

## 📧 Setting Up Resend for Emails

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### 2. Get Your API Key

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Brand Monitoring Guys")
4. Copy the key - this is your `RESEND_API_KEY`

### 3. Configure Your Domain (Optional but Recommended)

For production, verify your domain:
1. Go to [resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `brandmonitoringguys.com`)
4. Add the DNS records provided
5. Wait for verification
6. Update `CONTACT_EMAIL_FROM` to use your domain

### 4. Test the Contact Form

1. Fill out the contact form on your website
2. Check your inbox for the confirmation email
3. Check your team inbox (`CONTACT_EMAIL_TO`) for the notification

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure environment variables:
   - Add all variables from `.env.local`
6. Click "Deploy"

Your website will be live at `https://your-project.vercel.app`

### Custom Domain

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed
5. Wait for SSL certificate provisioning

## 🧪 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 🎨 Customization

### Colors

The brand colors are defined in `tailwind.config.ts`:

```typescript
brand: {
  purple: {
    500: "#a855f7", // Primary purple
    // ... other shades
  },
}
```

### Components

All components use shadcn/ui which can be customized by editing the component files in `src/components/ui/`.

### Typography

Fonts are configured in `src/app/layout.tsx`. Currently using Inter font.

## 📦 Key Dependencies

- `next` (^15.2.0) - React framework
- `react` (^19.0.0) - UI library
- `typescript` (^5) - Type safety
- `tailwindcss` (^3.4.1) - Styling
- `@notionhq/client` (^2.2.15) - Notion API
- `notion-to-md` (^3.1.1) - Notion to Markdown
- `resend` (^3.2.0) - Email delivery
- `@react-email/components` (^0.0.15) - Email templates
- `zod` (^3.22.4) - Schema validation
- `react-markdown` (^9.0.1) - Markdown rendering
- `lucide-react` (^0.344.0) - Icons

## 🔮 Future Roadmap

### Planned Features
- [ ] Domain scanning micro app
- [ ] User authentication with Clerk
- [ ] Dashboard for scan history
- [ ] Payment integration with Stripe
- [ ] Case studies section
- [ ] FAQ section
- [ ] Testimonials slider

### Architecture Prepared For
- API routes ready in `src/app/api/scan/`
- Component structure allows easy expansion
- Database integration planned (Vercel Postgres or Supabase)

## 🤝 Contributing

This is a private project for Brand Monitoring Guys. If you're a team member:

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Test locally
4. Push and create a pull request
5. Wait for review and merge

## 📄 License

Private and Confidential - Brand Monitoring Guys © 2026

## 🆘 Support

If you encounter issues:

1. Check the console for errors
2. Verify environment variables are set correctly
3. Check Notion API connection
4. Check Resend API connection
5. Review the deployment logs in Vercel

## 🎯 Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `NOTION_API_KEY` | Notion integration token | Blog only | `secret_abc123...` |
| `NOTION_DATABASE_ID` | Notion database ID | Blog only | `abc123def456...` |
| `RESEND_API_KEY` | Resend API key | Contact form | `re_abc123...` |
| `CONTACT_EMAIL_TO` | Team email for notifications | Contact form | `hello@brandmonitoringguys.com` |
| `CONTACT_EMAIL_FROM` | Sender email address | Contact form | `noreply@brandmonitoringguys.com` |

## 🏗️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Notion API](https://developers.notion.com/) - CMS
- [Resend](https://resend.com/) - Email delivery
- [Vercel](https://vercel.com/) - Hosting platform

---

Made with ❤️ for Brand Monitoring Guys
