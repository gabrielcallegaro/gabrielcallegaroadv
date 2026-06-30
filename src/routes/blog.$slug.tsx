import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { getPostBySlug, posts } from "@/content/blog";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) return { meta: [{ title: "Artigo não encontrado" }] };
    const url = `https://callegaroadvocacia.com.br/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} | Blog — Gabriel Callegaro` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            author: { "@type": "Person", name: post.author ?? "Gabriel Callegaro" },
            publisher: {
              "@type": "Organization",
              name: "Gabriel Callegaro Advocacia",
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  notFoundComponent: () => (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="pt-40 pb-20 text-center px-6">
        <h1 className="font-display text-3xl">Artigo não encontrado</h1>
        <Link to="/blog" className="mt-6 inline-block text-[var(--brand-wine)] underline">
          Voltar ao blog
        </Link>
      </section>
      <Footer />
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="bg-white min-h-screen">
      <Header />
      <section className="pt-40 pb-20 text-center px-6">
        <h1 className="font-display text-3xl">Erro ao carregar artigo</h1>
        <p className="mt-2 text-neutral-600">{error.message}</p>
      </section>
      <Footer />
    </main>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <article className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link to="/blog" className="text-sm text-[var(--brand-wine)] hover:underline">
            ← Voltar ao blog
          </Link>
          <p className="mt-6 text-xs uppercase tracking-wider text-neutral-500">
            {new Date(post.date).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
            {post.author ? ` · ${post.author}` : ""}
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-[var(--brand-darker)]">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-neutral-600">{post.description}</p>

          <div
            className="blog-content mt-10 text-neutral-800 leading-relaxed space-y-5 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-[var(--brand-darker)] [&_h2]:mt-10 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-[var(--brand-wine)] [&_a]:underline [&_strong]:font-semibold [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--brand-wine)] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-neutral-700 [&_img]:w-full [&_img]:rounded-lg [&_img]:my-8 [&_img]:shadow-sm [&_.cta-button]:no-underline [&_.cta-button]:inline-flex [&_.cta-button]:items-center [&_.cta-button]:justify-center [&_.cta-button]:gap-2 [&_.cta-button]:bg-[var(--brand-wine)] [&_.cta-button]:text-white [&_.cta-button]:px-6 [&_.cta-button]:py-3 [&_.cta-button]:rounded-md [&_.cta-button]:font-medium [&_.cta-button]:mt-6 hover:[&_.cta-button]:opacity-90"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {posts.length > 1 && (
            <div className="mt-16 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">Outros artigos</p>
              <ul className="mt-4 space-y-2">
                {posts
                  .filter((p) => p.slug !== post.slug)
                  .slice(0, 3)
                  .map((p) => (
                    <li key={p.slug}>
                      <Link
                        to="/blog/$slug"
                        params={{ slug: p.slug }}
                        className="text-[var(--brand-wine)] hover:underline"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}