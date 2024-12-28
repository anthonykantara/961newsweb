interface ContentBlock {
  type: 'text' | 'image' | 'quote' | 'list';
  content?: string;
  url?: string;
  caption?: string;
  author?: string;
  items?: string[];
}

interface ArticleContentProps {
  content: ContentBlock[];
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none space-y-8">
      {content.map((block, index) => {
        if (block.type === 'text') {
          return (
            <p key={index} className="text-gray-800 leading-relaxed">
              {block.content}
            </p>
          );
        }
        
        if (block.type === 'image') {
          return (
            <figure key={index} className="my-8">
              <img
                src={block.url}
                alt={block.caption}
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-gray-500">
                {block.caption}
              </figcaption>
            </figure>
          );
        }
        
        if (block.type === 'quote') {
          return (
            <blockquote key={index} className="border-l-4 border-[#FF0000] pl-4 italic">
              <p className="text-xl text-gray-800">{block.content}</p>
              {block.author && (
                <footer className="mt-2 text-gray-600">— {block.author}</footer>
              )}
            </blockquote>
          );
        }
        
        if (block.type === 'list') {
          return (
            <ul key={index} className="list-disc pl-6 space-y-2">
              {block.items?.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-800">{item}</li>
              ))}
            </ul>
          );
        }
        
        return null;
      })}
    </div>
  );
}