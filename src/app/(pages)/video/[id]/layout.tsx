import { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const video = {
    id: '1',
    title: "Behind the Scenes: Lebanon's Economic Recovery",
    description: "An in-depth look at the implementation of recent economic reforms and their impact on various sectors of the Lebanese economy. This special report features exclusive interviews with key stakeholders and expert analysis of the ongoing changes.",
    type: 'horizontal', // or 'vertical'
    thumbnailUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=2070',
    duration: '15:45',
    views: 45200,
    timestamp: new Date(Date.now() - 3600000),
    outlet: {
        name: '961 News',
        logo: '/961-logo.png',
        isFollowing: false
    },
    author: {
        name: 'Sarah Thompson',
        role: 'Senior Economic Affairs Correspondent',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1740',
        bio: 'Sarah Thompson is a veteran journalist with over 15 years of experience covering economic affairs in the Middle East.',
        followers: 12500,
        isFollowing: false
    }
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = (await params).id


    const ogTitle = video.title;
    const ogDescription = video.description;
    const ogImage = video.thumbnailUrl;
    const ogUrl = `https://news.961.co/articles/${video.id}`;

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
            creator: `@${video.author.name.replace(' ', '').toLowerCase()}`,
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