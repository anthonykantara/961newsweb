import React from 'react';
import { Globe, Binary, PersonStanding } from 'lucide-react';
import Link from 'next/link';
import { formatTimeAgo } from '../../utils/dateUtils';

interface Article {
    id: string;
    title: string;
    imageUrl?: string;
    category?: string;
    timestamp: Date;
    outlet: {
        name: string;
        logo: string;
    };
}

interface RowNewsSectionProps {
    title: string; // Title of the section (e.g., "World News", "Technology")
    articles: Article[]; // Array of news articles for the section
    headlines: string[]; // Array of headlines
    viewAllLink: string; // URL for the "View All" link
}

const iconMap: Record<string, React.ReactNode> = {
    world: <Globe className="w-5 h-5 text-[#FF0000]" />,
    technology: <Binary className="w-5 h-5 text-[#FF0000]" />,
    politics: <PersonStanding className="w-5 h-5 text-[#FF0000]" />,
  };

export default function RowNewsSection({ title, articles, headlines, viewAllLink }: RowNewsSectionProps) {
    const icon = iconMap[title.toLowerCase().split(" ")[0]] || <Globe className="w-5 h-5 text-[#FF0000]" />;

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    {icon}
                    <h2 className="text-[18px] font-bold">{title}</h2>
                </div>
                <Link
                    href={viewAllLink}
                    className="text-[#FF0000] hover:text-red-700 transition-colors text-base font-medium"
                >
                    View All
                </Link>
            </div>
            <div className="grid grid-cols-5 gap-6">
                {articles[0] && (
                    <Link
                        href={`/article/${articles[0].id}`}
                        className="group col-span-2"
                    >
                        <div className="aspect-[1.91/1] overflow-hidden rounded-lg relative mb-3">
                            <img
                                src={articles[0].imageUrl}
                                alt={articles[0].title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <h3 className="font-medium text-[17px] leading-snug text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-2">
                                {articles[0].title}
                            </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-400">{articles[0].outlet.name}</span>
                                <span className="text-xs text-gray-400">{formatTimeAgo(articles[0].timestamp)}</span>
                            </div>
                        </div>
                    </Link>
                )}

                <div className="space-y-8">
                    {articles.slice(1, 3).map((article) => (
                        <Link
                            key={article.id}
                            href={`/article/${article.id}`}
                            className="group block mb-4 last:mb-0"
                        >
                            <div className="h-[78px] overflow-hidden rounded-lg relative mb-2">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <h3 className="font-medium text-[15px] leading-snug text-gray-900 group-hover:text-[#FF0000] transition-colors line-clamp-2 mb-1">
                                    {article.title}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400">{article.outlet.name}</span>
                                    <span className="text-xs text-gray-400">{formatTimeAgo(article.timestamp)}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="space-y-4 col-span-2">
                    {headlines.map((headline, index) => (
                        <div key={index}>
                            <Link href={viewAllLink} className="group block py-0.5 cursor-pointer">
                                <h3 className="font-medium text-[15px] leading-snug line-clamp-2 text-gray-900 group-hover:text-[#FF0000] transition-colors">
                                    {headline}
                                </h3>
                            </Link>
                            {index < headlines.length - 1 && (
                                <div className="h-px bg-gray-100 mt-0.5" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
