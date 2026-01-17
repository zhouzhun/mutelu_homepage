# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MuteluAI Homepage - A bilingual (English/Thai) website for the MuteluAI LINE chatbot service. The site showcases the AI assistant's features and provides legal documentation (Terms of Service, Privacy Policy, Refund Policy).

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export to out/)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment (Cloudflare Pages)

- Build command: `npm run build`
- Build output directory: `out`

## Architecture

- **Framework**: Next.js 16 with App Router, TypeScript, Tailwind CSS 4
- **Output**: Static site export (`output: "export"` in next.config.ts) to `out/` directory
- **Styling**: Tailwind CSS 4 with custom theme colors (mystic-gold, mystic-purple, mystic-dark)

### Key Directories

- `src/app/` - Next.js App Router pages (/, /terms, /privacy, /refund)
- `src/components/` - React components (Header, Hero, Features, Footer, LanguageProvider)
- `src/locales/` - i18n translations (en.ts, th.ts)
- `public/images/` - Static assets (logo, QR code, cover photo)

### Internationalization

Language switching is client-side via React Context (`LanguageProvider`). All user-facing text is stored in `src/locales/en.ts` and `src/locales/th.ts`. To add translations, update both locale files with matching keys.

### Company Information

- Company: MobiusVision LLC
- Website: https://mobiusvision.com/
- Email: contact@mobiusvision.com
- Phone: +1-307-777-7311
- Address: 30 N Gould St Ste N, Sheridan, WY 82801 USA
