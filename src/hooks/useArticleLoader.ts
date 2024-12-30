import { useState, useCallback, useEffect } from 'react';
import { Article } from '../types/article';

export function useArticleLoader(currentArticle: Article) {
  const [loadedArticles, setLoadedArticles] = useState<Article[]>([currentArticle]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadNextArticle = useCallback(async () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const nextArticle: Article = {
        ...currentArticle,
        id: (parseInt(loadedArticles[loadedArticles.length - 1].id) + 1).toString(),
        title: `Next Article ${loadedArticles.length + 1}: Impact of Economic Reforms`,
        content: currentArticle.content.map(block => ({
          ...block,
          content: block.content ? `Next article content: ${block.content}` : undefined
        }))
      };

      setLoadedArticles(prev => [...prev, nextArticle]);
      
      // Stop loading after 5 articles
      if (loadedArticles.length >= 4) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading next article:', error);
    } finally {
      setIsLoading(false);
    }
  }, [currentArticle, loadedArticles.length, isLoading, hasMore]);

   // Preload next article
   useEffect(() => {
    if (hasMore && !isLoading) {
      loadNextArticle();
    }
   }, [hasMore, isLoading, loadNextArticle]);
  
  return {
    loadedArticles,
    isLoading,
    hasMore,
    loadNextArticle
  };
}