Splice Assessment Test Dashboard

## Next Js Dashboard with API Integration

This project is a NextJs dashboard application that fetches user data from a mock API, implements search, and pagination. It uses TypeScript for type safety, Tailwind CSS for styling, Tanstack Table for table data rendering and TanStack Query for API data management.

## Features Implemented

API Integration & State Management:

- Data fetched from JSONPlaceholder using Axios.

- State management with TanStack Query for efficient data fetching, caching, and background refetching.

### UI Features:

- Display a list of users with name, email, company, and phone details.

- Search functionality to filter users by name.

- Frontend Pagination for navigating through user data.

Performance Optimizations:

- Debounced search to optimize API calls.

Bonus Features:

- Authentication (implemented with fake credentials, token stored in cookies).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed on Vercel

[Live link](https://splice-assessment-dashboard.vercel.app/)

## Technologies Used

- React.js: Frontend library for building user interfaces.

- Next.js: React framework.

- TypeScript: Adds static typing to JavaScript.

- Tailwind CSS: Utility-first CSS framework for styling.

- TanStack Query: Data fetching and caching library.

- Axios: HTTP client for making API requests.

- Yarn: Package manager for Node.js projects.

- Cookies: Used for storing authentication tokens.

- Tanstack table: Table data rendering library.

- Shadcn: Component library.
