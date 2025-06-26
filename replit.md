# TCET EDIC - Entrepreneurship Development and Innovation Cell

## Overview

TCET EDIC is a full-stack web application for the Entrepreneurship Development and Innovation Cell at Thakur College of Engineering & Technology. The application serves as a comprehensive platform for student entrepreneurs to register, submit ideas, request mentorship, and access educational resources. It features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and Drizzle ORM for database operations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Session Management**: Express sessions with PostgreSQL store
- **Development Server**: TSX for TypeScript execution in development

### Data Storage Solutions
- **Primary Database**: PostgreSQL 16
- **ORM**: Drizzle ORM for type-safe database operations
- **Migration System**: Drizzle Kit for schema migrations
- **Connection**: Neon Database serverless for cloud PostgreSQL
- **Fallback Storage**: In-memory storage for development/testing

## Key Components

### Database Schema
The application defines four main entities:
- **Users**: Authentication and user management
- **Registrations**: Student registration for EDIC membership
- **Ideas**: Student-submitted business ideas and projects
- **Mentorship Requests**: Applications for mentorship support

### API Endpoints
- `POST /api/register` - Student registration
- `POST /api/submit-idea` - Business idea submission
- `POST /api/request-mentorship` - Mentorship request submission

### Frontend Pages
- **Home**: Landing page with hero section and overview
- **About**: Organization mission, vision, and values
- **Team**: Core team and faculty coordinator profiles
- **Events**: Upcoming and past events showcase
- **Startups**: Student startup portfolio display
- **Student Corner**: Resources, idea submission, and mentorship requests
- **Register**: EDIC membership registration form
- **Contact**: Contact information and communication channels

### UI Components
- Comprehensive component library based on shadcn/ui
- Dark/light theme support with system preference detection
- Mobile-responsive navigation with hamburger menu
- Form components with validation and error handling
- Toast notifications for user feedback

## Data Flow

1. **Registration Flow**: Students fill out registration forms → Data validated with Zod schemas → Stored in PostgreSQL → Optional Google Sheets integration via Sheet.best API
2. **Idea Submission**: Students submit business ideas → Validation → Database storage → Admin review capability
3. **Mentorship Requests**: Students request mentorship → Form validation → Database storage → Mentor matching process
4. **Content Display**: Static content served from React components with dynamic data fetching where needed

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless, drizzle-orm, connect-pg-simple
- **Frontend**: React, @tanstack/react-query, wouter, framer-motion
- **UI**: @radix-ui components, tailwindcss, class-variance-authority
- **Forms**: @hookform/resolvers, react-hook-form, zod
- **Development**: vite, tsx, typescript

### Third-party Integrations
- **Google Sheets**: Sheet.best API for external data synchronization
- **Fonts**: Google Fonts (Inter) for typography
- **Icons**: Lucide React for consistent iconography

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Development Server**: Vite dev server with HMR
- **Port Configuration**: Local port 5000, external port 80

### Production Build
- **Frontend**: Vite build process generating optimized static assets
- **Backend**: ESBuild bundling server code for Node.js runtime
- **Deployment**: Autoscale deployment target on Replit
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Database Management
- **Schema**: Defined in shared/schema.ts with Drizzle ORM
- **Migrations**: Generated and managed via drizzle-kit
- **Development**: `npm run db:push` for schema synchronization

## Changelog

Changelog:
- June 26, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.