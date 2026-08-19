# Estele

Estele is a full-stack e-commerce storefront built with **Laravel** and **React**, wired together with **Inertia.js**. It provides a public storefront (home, shop, product pages, collections, store locator) alongside an authenticated admin panel for managing categories, collections, and products.

## Tech Stack

**Backend**
- [Laravel 13](https://laravel.com/) (PHP 8.3+)
- [Inertia.js (Laravel adapter)](https://inertiajs.com/) — server-driven SPA, no separate API layer
- [Pest](https://pestphp.com/) for testing
- [Laravel Pint](https://laravel.com/docs/pint) for code style, [Larastan](https://github.com/larastan/larastan) for static analysis

**Frontend**
- [React 19](https://react.dev/) + TypeScript
- [Inertia.js (React adapter)](https://inertiajs.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) for bundling
- shadcn-style UI primitives (via `@base-ui/react`, `class-variance-authority`, `tailwind-merge`)
- ESLint + Prettier for linting/formatting

## Features

- **Storefront** — home page, shop listing, individual product pages, collection pages, and a store locator
- **Search** — product search endpoint
- **Auth** — user registration and login (guest-only routes), logout for authenticated users
- **Cart** — client-side cart with add, remove, and quantity management using browser local storage
- **Admin panel** — protected by `auth` + `admin` middleware, with full CRUD for:
  - Categories
  - Collections
  - Products

## Data Model

- **Category** — name, slug, description, image, count
- **Collection** — name, slug, description, image, count
- **Product** — belongs to a Category and a Collection; name, price, description, images, stock count
- **User** — standard Laravel auth user

## Getting Started

### Setup

```bash
composer run setup
composer run dev
```

The app will be available at `http://localhost:8000`.

## Project Structure

```
app/Http/Controllers    # All Controllers 
app/Models              # All Models 
database/migrations     # Schema for categories, collections, products, users
resources/js/pages      # Inertia pages: Home, Shop, Product, Login, SignUp, Admin, StoreLocation
resources/js/components # All components
routes/web.php          # All application routes
```

## License

This project is open-sourced under the [MIT license](https://opensource.org/licenses/MIT)
