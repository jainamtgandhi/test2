import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import PageTemplate from '@/components/PageTemplate';
import { pageData } from '@/lib/config';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(pageData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const data = pageData[slug];

  if (!data) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${data.title} - Hey It's Jainam`,
    description: data.description,
    openGraph: {
      title: `${data.title} - Hey It's Jainam`,
      description: data.description,
      url: `https://heyitsjainam.com/${slug}`,
    },
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params;
  const data = pageData[slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PageHeader title={data.title} description={data.description} />
        <PageTemplate pageData={data} />
      </div>
    </div>
  );
}
