# Overview

This is a full-stack web application for "Alfa e Omega Dev," a software development consultancy company. The application serves as a corporate website featuring company information, services, portfolio, and a contact form. It's built as a modern single-page application with a React frontend and Express.js backend, designed to showcase the company's expertise and facilitate client inquiries.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The client-side is built with **React 18** and **TypeScript**, utilizing a component-based architecture with modern React patterns. Key architectural decisions include:

- **Vite** as the build tool and development server for fast hot module replacement and optimized builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Tailwind CSS** with **shadcn/ui** components for consistent, responsive design system
- **TanStack React Query** for server state management and API interaction
- **React Hook Form** with **Zod validation** for type-safe form handling
- Component organization follows atomic design principles with separate directories for UI components, layout components, and page sections

## Backend Architecture

The server-side uses **Express.js** with **TypeScript** in an ESM environment. Core architectural choices:

- **RESTful API** design with clear endpoint structure (`/api/*`)
- **Modular route organization** with dedicated route handlers
- **Middleware-based request/response logging** for debugging and monitoring
- **Error handling middleware** for centralized error management
- **Development and production environment separation** with conditional Vite integration

## Data Storage Solutions

The application implements a **flexible storage abstraction** pattern:

- **Interface-based storage layer** (`IStorage`) allowing multiple implementations
- **In-memory storage** (`MemStorage`) for development and testing
- **Drizzle ORM** with **PostgreSQL** schema definitions for production database
- **Neon Database** integration for cloud PostgreSQL hosting
- **Type-safe database operations** using Drizzle's TypeScript-first approach

Database schema includes:
- Users table with authentication fields
- Contact messages table for form submissions
- UUID primary keys with PostgreSQL's `gen_random_uuid()`

## Authentication and Authorization

Currently implements a **basic user model** with:
- Username/password authentication structure
- User storage and retrieval methods
- Foundation for future authentication middleware integration

## Form Handling and Validation

- **Zod schemas** for both client and server-side validation
- **Type sharing** between frontend and backend using shared schema definitions
- **Real-time form validation** with React Hook Form integration
- **Toast notifications** for user feedback on form submissions

# External Dependencies

## UI and Styling
- **Radix UI** components for accessible, unstyled UI primitives
- **Tailwind CSS** for utility-first styling approach
- **Lucide React** for consistent icon library
- **Google Fonts** (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono) for typography

## State Management and Data Fetching
- **TanStack React Query** for server state management and caching
- **React Hook Form** for form state management
- **Wouter** for client-side routing

## Database and ORM
- **Drizzle ORM** for type-safe database operations
- **Neon Database** (@neondatabase/serverless) for PostgreSQL hosting
- **Drizzle Kit** for database migrations and schema management

## Development Tools
- **Vite** for build tooling and development server
- **TypeScript** for type safety across the entire stack
- **ESBuild** for production server bundling
- **PostCSS** with Autoprefixer for CSS processing

## Validation and Utilities
- **Zod** for runtime type validation and schema definition
- **date-fns** for date manipulation utilities
- **clsx** and **tailwind-merge** for conditional styling
- **class-variance-authority** for component variant management

The application is configured for deployment on Replit with specialized plugins for development environment integration and error handling.