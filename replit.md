# Replit.md - Shakil Ridmike Portfolio

## Overview

This is a full-stack portfolio website for Shakil Ridmike, a mobile app developer specializing in Flutter and React Native. The application showcases his projects, skills, and provides a contact form for potential clients. It's built with modern web technologies and follows a clean, responsive design approach.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme**: Dark/light mode support with custom theme provider

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful endpoints with JSON responses
- **Validation**: Zod for schema validation

### Build System
- **Bundler**: Vite for frontend build and development
- **Backend Build**: esbuild for server-side compilation
- **Development**: Hot module replacement with Vite dev server
- **Production**: Static file serving with Express

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, message, createdAt)
- **Schema Validation**: Drizzle-Zod integration for type-safe database operations

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Retrieve all contacts (admin functionality)

### Frontend Pages
- **Home**: Single-page application with sections for hero, about, projects, skills, and contact
- **404**: Custom not found page

### UI Components
- **Navigation**: Responsive navigation with theme toggle
- **Hero Section**: Animated landing section with particles background
- **About Section**: Personal information and milestones
- **Projects Section**: Portfolio showcasing with modal details
- **Skills Section**: Technical and soft skills display
- **Contact Section**: Form with validation and API integration
- **Footer**: Social links and copyright

### Theme System
- **CSS Variables**: Custom color system with light/dark mode support
- **Tailwind Integration**: Extended theme configuration
- **Responsive Design**: Mobile-first approach with breakpoint-based styling

## Data Flow

1. **Client Request**: User interacts with React components
2. **Form Submission**: Contact form data validated with Zod schema
3. **API Call**: Frontend sends POST request to `/api/contact`
4. **Server Processing**: Express server validates and stores data using Drizzle ORM
5. **Database Operation**: Data persisted to PostgreSQL via Neon Database
6. **Response**: Success/error response returned to client
7. **UI Update**: Toast notification displayed to user

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Animation**: Framer Motion
- **HTTP Client**: TanStack Query with fetch API
- **Form Validation**: Zod with Hookform resolvers
- **Date Handling**: date-fns
- **Utilities**: clsx, class-variance-authority

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: @neondatabase/serverless
- **Validation**: Zod
- **Session Management**: connect-pg-simple (configured but not actively used)

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Development**: tsx for TypeScript execution
- **Database Tools**: Drizzle Kit for migrations

## Deployment Strategy

### Development Mode
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with NODE_ENV=development
- **Database**: Drizzle Kit push for schema changes

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend files
4. **Database**: Migrations applied via Drizzle Kit

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific environment detection

### Key Features
- **Memory Storage Fallback**: In-memory storage implementation for development
- **Error Handling**: Comprehensive error boundaries and API error responses
- **Performance**: Optimized builds with tree-shaking and code splitting
- **SEO**: Meta tags and Open Graph support
- **Accessibility**: WCAG-compliant UI components

The application demonstrates modern full-stack development practices with type safety, responsive design, and smooth user experience. The portfolio effectively showcases mobile development expertise while maintaining professional presentation standards.