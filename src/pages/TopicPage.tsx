import React from 'react';
import { useParams } from 'react-router-dom';
import TopicLayout from '../components/TopicLayout/TopicLayout';

export default function TopicPage() {
  const { topic } = useParams();
  const formattedTopic = topic ? topic.charAt(0).toUpperCase() + topic.slice(1) : '';

  return (
    <TopicLayout 
      title={formattedTopic}
      description={`Latest news and updates about ${formattedTopic}`}
      topic={formattedTopic}
    />
  );
}