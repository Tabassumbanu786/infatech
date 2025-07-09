'use client';
import { useEffect, useState } from 'react';

const FinanceNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/rss')
      .then(res => res.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">📰 Latest Finance News</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-t-4 border-yellow-400 rounded-lg p-4 shadow hover:shadow-lg hover:bg-yellow-50 transition-transform duration-200 bg-white"
          >
            <h4 className="font-bold text-[#050a1e] text-lg mb-1">{item.title}</h4>
            <p className="text-sm text-gray-700 line-clamp-2 mb-2">
              {item.contentSnippet ? item.contentSnippet.slice(0, 150) + '...' : 'No summary available...'}
            </p>
            <p className="text-xs text-gray-400">{new Date(item.pubDate).toLocaleString()}</p>
            <span className="text-blue-700 text-sm mt-2 inline-block font-medium">Read More →</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FinanceNews;

