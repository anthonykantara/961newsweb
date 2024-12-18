import { Post } from '../types/post';
import { authors, titles, excerpts, images, durations } from './postData';

export const generateMockPosts = (count: number): Post[] => {
  return Array.from({ length: count }, (_, i) => {
    const type = i % 4 === 0 ? 'vertical-video' : 
                i % 3 === 0 ? 'horizontal-video' : 
                'article';
    
    const imageSet = type === 'vertical-video' ? images.vertical :
                    type === 'horizontal-video' ? images.horizontal :
                    images.article;

    const randomIndex = Math.floor(Math.random() * imageSet.length);
    const titleIndex = Math.floor(Math.random() * titles.length);
    const excerptIndex = Math.floor(Math.random() * excerpts.length);
    const authorIndex = Math.floor(Math.random() * authors.length);
    const durationIndex = Math.floor(Math.random() * durations.length);

    return {
      id: (i + 1).toString(),
      type,
      title: titles[titleIndex],
      excerpt: excerpts[excerptIndex],
      imageUrl: imageSet[randomIndex],
      timestamp: new Date(Date.now() - (i * 3600000)),
      author: authors[authorIndex],
      ...(type !== 'article' && {
        duration: durations[durationIndex],
        views: Math.floor(Math.random() * 50000) + 10000
      })
    };
  });
};