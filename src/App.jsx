import { useEffect } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import TwoColumnPage from './TwoColumnPage.jsx'
import ArticlePage from './ArticlePage.jsx'
import NewsListingPage from './NewsListingPage.jsx'
import { getArticleBySlug } from './data/articles.js'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/two-column" element={<TwoColumnPage />} />
        <Route path="/news" element={<NewsListingPage />} />
        <Route path="/news/:slug" element={<ArticleRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

/**
 * Client-side navigation keeps the scroll position; reset it per page.
 * A #hash in the URL (e.g. /#newswire) scrolls to that element instead.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

/** Looks up the article for /news/:slug and renders it in ArticlePage. */
function ArticleRoute() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  if (!article) return <NotFound />

  // Every field is passed explicitly (null when absent) so ArticlePage's
  // built-in sample content never leaks into a real article.
  return (
    <ArticlePage
      breadcrumbLevels={[
        { label: 'Newsroom', to: '/news' },
        ...(article.section === 'newswire' ? [{ label: 'Newswire', to: '/#newswire' }] : []),
        ...(article.section === 'company' ? [{ label: 'Mozde News', to: '/#company-news' }] : []),
      ]}
      date={article.date}
      author={article.author}
      headline={article.headline}
      intro={article.intro}
      byLine={article.byLine ?? null}
      toLine={article.toLine ?? null}
      bodyParagraphs={article.bodyParagraphs ?? []}
      note={article.note ?? null}
      tags={article.tags ?? []}
    />
  )
}

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-bold uppercase tracking-[3px]">Page not found</h1>
      <nav aria-label="Pages" className="flex gap-6 text-sm font-bold uppercase underline">
        <Link to="/">Home page</Link>
        <Link to="/news">Newsroom</Link>
        <Link to="/two-column">Two column page</Link>
      </nav>
    </main>
  )
}

export default App
