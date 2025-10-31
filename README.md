# BAARA Consulting Website

BAARA Consulting: Management. Leadership. Partnership.

A visually stunning and professional website for a Johannesburg-based management and leadership advisory firm, designed to attract and convert high-value clients.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/moulayecamara2010-blip/generated-app-20251031-161706)

## Table of Contents

- [About the Project](#about-the-project)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## About the Project

BAARA Consulting is a Johannesburg-based management and leadership advisory firm committed to driving impactful change through expert guidance. This project aims to create a sophisticated, high-performing website that enhances visibility, engagement, and client conversion. The design philosophy is minimalist, conveying credibility, an African-rooted perspective, and a focus on tangible results. The website is tailored for an audience of international NGOs, development agencies, and African governments.

## Key Features

-   **Visually Stunning Design:** A clean, modern, and spacious layout with a minimalist aesthetic.
-   **Professional Branding:** Combines a deep charcoal, warm ochre, and off-white color palette with elegant serif and readable sans-serif typography.
-   **Responsive & Accessible:** Intentionally designed layouts that adapt seamlessly across all devices, adhering to accessibility best practices.
-   **Clear User Journey:** Intuitive navigation and content structure designed to guide potential clients from initial interest to consultation.
-   **Thought Leadership Showcase:** Dedicated sections for insights, articles, and case studies to establish BAARA as an industry expert.
-   **Interactive Elements:** Subtle animations, hover effects, and smooth transitions enhance user experience without compromising professionalism.
-   **Static Site Generation:** Optimized for performance and security, served from Cloudflare's edge network.

## Technology Stack

-   **Frontend Framework:** React
-   **UI Components:** Shadcn/ui, Headless UI
-   **Styling:** Tailwind CSS
-   **Routing:** React Router DOM
-   **Icons:** Lucide React
-   **Animations:** Framer Motion
-   **Form Handling:** React Hook Form, Zod
-   **State Management:** Zustand
-   **Build Tool:** Vite
-   **Deployment:** Cloudflare Workers

## Getting Started

### Prerequisites

-   [Bun](https://bun.sh/) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd baara_consulting_website
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

### Development

To start the development server:

```bash
bun run dev
```

This will start the Vite development server, typically on `http://localhost:3000`. The application will automatically reload on code changes.

## Deployment

This project is designed to be deployed as a static site on Cloudflare Workers.

1.  **Build the project:**
    ```bash
    bun run build
    ```
    This command creates an optimized production build in the `dist` directory.

2.  **Deploy to Cloudflare:**
    Ensure you have the Wrangler CLI installed (`bun install -g wrangler`).
    Configure your `wrangler.toml` file with your Cloudflare account details.

    ```bash
    wrangler deploy
    ```

    Alternatively, you can use the Cloudflare Deploy button:
    [![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/moulayecamara2010-blip/generated-app-20251031-161706)

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
