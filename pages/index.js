import { useRouter } from 'next/router';
import ArticleList from '../components/article-list';
import Navigation from '../components/navigation';
import articles from '../articles.json';

const ArticleCategory = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div className="index-wrapper">
    <Navigation />
    <h1>Buried Signals</h1>
    <h2>Articles</h2>
    <ArticleList articles={articles} catgory={category} />
    <h2>About</h2>
    <a href="/about">About</a>
  </div>)
}

export default ArticleCategory;