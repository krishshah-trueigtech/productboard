# 🚀 Next.js Practice Project

Project: ProductBoard (Frontend Focus – Next.js 16)

## 📌 Objective

Build a Product Management Dashboard UI using Next.js 16 (App Router).  
This project focuses only on frontend concepts of Next.js.  
 No backend or API route creation is required.
After completing this project, you should be confident working on a real Next.js frontend production project.

## 🛠️ Tech Stack
- Next.js 16 (App Router)

- JavaScript

- Tailwind CSS (or normal CSS)

- Mock JSON data (local file)

## 🧱 Project Overview
- You will build a frontend dashboard where:
Users can log in

- Users can access protected routes

- Users can view products

- Users can filter & search products

- Each product has a dynamic detail page

- SEO metadata is implemented

- Proper loading & error handling is implemented

- Correct Server & Client component usage

## 📂 Required Route Structure  
app/  
├── layout.js  
├── page.js  
├── login/page.js  
├── dashboard/page.js  
├── products/  
│ ├── page.js  
│ ├── [id]/page.js  
├── loading.js  
├── error.js  
├── not-found.js  

middleware.js  

## ✅ Features To Implement

1. App Router & Layouts
   Use layout.js

    Create nested layouts (optional but recommended)

    Use proper file-based routing

    Create a shared header/sidebar layout for dashboard

2. Server vs Client Components
   Pages must be Server Components by default

    Add "use client" only where necessary

    Forms, search input → Client Component

    Product listing → Server Component

3. Data Fetching (Frontend Only)
   Store product data inside a local JSON file

    Fetch data inside Server Components using fetch()

    Use:

    cache: 'no-store'

    revalidate

    Demonstrate difference between static and dynamic rendering.

4. Dynamic Routes
   Create:
   /products/[id]

    Show product details

    Handle invalid ID

    Show not-found.js properly

5. Metadata & SEO
   Implement:
   export const metadata = {}

    Static metadata for main pages

    Dynamic metadata for product page

    Product title as page title

    Product description as meta description

6. Middleware Protection
   Create middleware.js:
   Protect /dashboard

    Protect /products

    Redirect to /login if no cookie/token exists

7. Authentication (Frontend Simulation)
   Login page

    Store token in cookies

    Logout clears cookie

    Middleware checks cookie

8. Loading UI
   Create loading.js

    Show loading state during route change

    Avoid blank screens

9. Error UI
   Create error.js

    Show proper fallback UI

    App should not crash completely

10. Client-Side Navigation
    Use:
    next/link

    useRouter()

    Implement:
    Navigation between dashboard & products

    Programmatic navigation after login

11. Search & Filtering (Client Side)
    Add search input

    Add category filter

    Use:

    useMemo

    useDebounce

    No heavy logic inside JSX

12. Environment Variables
    Create:
    .env.local

    Store base URL or config values

    Use process.env

    Do not hardcode values

13. Static vs Dynamic Rendering
    Demonstrate:
    Static page (Home page)

    Dynamic page (Dashboard with no-store)

    Revalidated page using revalidate

    Understand difference clearly.

14. Image Optimization
    Use:
    next/image

    Add product images

    Define width & height

    Lazy loading

    Optimize image usage

15. Route Groups (Advanced App Router Concept)
    Use route groups:
    (app)
    (auth)

    Organize routes cleanly without affecting URL.

16. Parallel Routes (Optional Advanced)
    Create a modal route or side panel using parallel routes.
    Example:
    Open product preview as modal without leaving page

17. Suspense & Streaming
    Use:
    <Suspense>

    Wrap product list

    Show fallback

    Understand streaming behavior

18. Scroll Restoration & UX
    Maintain scroll position

    Smooth route transitions

    Avoid layout shifts

19. Custom 404 Page
    Implement:
    not-found.js

    Friendly UI

    Link back to dashboard

20. Performance Best Practices
    Avoid unnecessary "use client"

    Keep heavy logic in Server Components

    Avoid sending large props to client

    Keep components modular

## 🧪 Self Review Checklist
- No console errors

- Middleware works correctly

- Dynamic routes work

- Metadata working properly

- No unnecessary client components

- Loading & error states working

- not-found page working

- Images optimized

- Route groups implemented

- Code structure clean

- 📋 Final Submission
- Project runs locally

- All routes working

- Proper folder structure

- Clean, readable code

- Correct Next.js usage

## 🎯 Expected Outcome
After this project, you should:
Understand Next.js App Router deeply

Know Server vs Client components clearly

Implement route protection

Manage metadata & SEO

Handle loading, error & 404 states

Understand rendering strategies

Be ready to work on real Next.js frontend production tasks
