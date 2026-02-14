import type { ResourceHubPageConfig } from "@/types/page-config";

export const exampleResourcesPage: ResourceHubPageConfig = {
  type: "resource-hub",
  slug: "example-resources",
  metadata: {
    title: "Developer Resources",
    description:
      "Guides, tutorials, ebooks, and webinars to help you build modern web applications.",
  },
  hero: {
    title: "Developer Resources",
    subtitle: "Learn, build, and scale",
    description:
      "Everything you need to build production-ready web applications. From getting started guides to advanced architecture patterns.",
  },
  featuredResources: [
    {
      title: "Getting Started Guide",
      description:
        "A comprehensive introduction to building web applications covering project setup, authentication, databases, and deployment.",
      type: "guide",
      image: {
        src: "/images/landing-pages/example-resources/getting-started.png",
        alt: "Getting Started Guide",
      },
      href: "/example-ebook",
      tags: ["beginner", "tutorial"],
      featured: true,
    },
    {
      title: "Authentication Deep Dive",
      description:
        "Deep dive into modern authentication covering SSO providers, mobile auth flows, and server-side session management.",
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      tags: ["auth", "advanced"],
      featured: true,
    },
  ],
  resources: [
    {
      title: "Authentication Best Practices",
      description:
        "Implement secure authentication with email, social logins, and SSO in your web application.",
      type: "ebook",
      image: {
        src: "/images/landing-pages/example-resources/auth.png",
        alt: "Auth Ebook",
      },
      href: "#",
      tags: ["auth", "security"],
    },
    {
      title: "Database Design Patterns",
      description:
        "Design efficient database schemas with proper indexes, relations, and access control policies.",
      type: "whitepaper",
      image: {
        src: "/images/landing-pages/example-resources/database.png",
        alt: "Database Whitepaper",
      },
      href: "#",
      tags: ["database", "advanced"],
    },
    {
      title: "File Storage and Resumable Uploads",
      description:
        "Learn about resumable uploads, CDN caching strategies, and scalable file storage architecture.",
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      tags: ["storage", "tutorial"],
    },
    {
      title: "Building RESTful APIs",
      description:
        "Design and deploy RESTful APIs with proper routing, validation, error handling, and documentation.",
      type: "video",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      tags: ["api", "serverless"],
    },
    {
      title: "Storage and CDN Setup",
      description:
        "Configure file storage with CDN integration and access policies for your application.",
      type: "guide",
      image: {
        src: "/images/landing-pages/example-resources/storage.png",
        alt: "Storage Guide",
      },
      href: "#",
      tags: ["storage", "tutorial"],
    },
    {
      title: "Migration Guide",
      description:
        "Step-by-step guide to migrating your existing application to a modern web stack.",
      type: "guide",
      image: {
        src: "/images/landing-pages/example-resources/migration.png",
        alt: "Migration Guide",
      },
      href: "#",
      tags: ["migration", "guide"],
    },
    {
      title: "Acme Corp Case Study (sample)",
      description:
        "A fictional case study for demonstration purposes. Replace with your real customer story.",
      type: "case-study",
      image: {
        src: "/images/landing-pages/example-resources/case-study.png",
        alt: "Case Study",
      },
      href: "#",
      tags: ["case-study", "enterprise"],
    },
  ],
  categories: [
    { id: "beginner", label: "Beginner" },
    { id: "advanced", label: "Advanced" },
    { id: "auth", label: "Authentication" },
    { id: "database", label: "Database" },
    { id: "storage", label: "Storage" },
    { id: "api", label: "APIs" },
  ],
  codeSnippet: {
    title: "Quick start",
    subtitle:
      "Get up and running with a REST API call in under a minute.",
    filename: "app.ts",
    language: "typescript",
    showLineNumbers: true,
    code: `const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

interface Post {
  id: string
  title: string
  author: { name: string }
  created_at: string
}

// Fetch recent posts from your API
const response = await fetch(\`\${API_BASE_URL}/posts?limit=10&sort=created_at:desc\`, {
  headers: {
    'Authorization': \`Bearer \${process.env.API_TOKEN}\`,
    'Content-Type': 'application/json',
  },
})

const posts: Post[] = await response.json()

// Listen for real-time updates via Server-Sent Events
const eventSource = new EventSource(\`\${API_BASE_URL}/posts/stream\`)

eventSource.addEventListener('new-post', (event) => {
  const newPost: Post = JSON.parse(event.data)
  console.log('New post:', newPost.title)
})`,
  },
  newsletterCta: {
    title: "Stay updated",
    description:
      "This is a sample newsletter signup. The form does not actually submit anywhere.",
    form: {
      fields: [
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "you@company.com",
          required: true,
        },
      ],
      submitLabel: "Subscribe",
      customerio: {
        eventName: "newsletter_signup",
        metadata: {
          source: "resource-hub",
        },
      },
    },
  },
};
