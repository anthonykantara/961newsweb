import TopicLayout from '@/components/TopicLayout/TopicLayout';

export default function TopicPage({
    params,
}: {
    params: { topic: string }
}) {
  const { topic } = params;
  const formattedTopic = topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : '';

  return (
    <TopicLayout 
      title={formattedTopic}
      description={`Latest news and updates about ${formattedTopic}`}
      topic={formattedTopic}
    />
  );
}