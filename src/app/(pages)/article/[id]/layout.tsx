import { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
    // { params, searchParams }: Props,
    // parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const article = {
        id: '1',
        title: "Lebanon's Economic Recovery: A Comprehensive Analysis of Recent Reforms",
        subtitle: 'An in-depth look at the latest economic measures and their potential impact on the Lebanese economy',
        featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
        author: {
            name: 'Sarah Thompson',
        },
    };

    const ogTitle = article.title;
    const ogDescription = article.subtitle;
    const ogImage = article.featuredImage;
    const ogUrl = `https://news.961.co/articles/${article.id}`;

    // const id = (await params).id

    return {
        title: `${ogTitle} | 961 News`,
        openGraph: {
            title: `${ogTitle} | 961 News`,
            description: ogDescription,
            url: ogUrl,
            siteName: '961 News',
            images: [
                {
                    url: ogImage,
                    width: 800,
                    height: 600,
                },
                {
                    url: ogImage,
                    width: 1800,
                    height: 1600,
                    alt: ogTitle,
                },
            ],
            locale: 'en_US',
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description: ogDescription,
            images: [ogImage],
            creator: `@${article.author.name.replace(' ', '').toLowerCase()}`,
        },
    }
}

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}