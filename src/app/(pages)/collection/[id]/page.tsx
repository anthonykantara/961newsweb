import React from 'react';
import CollectionLayout from '@/components/CollectionLayout/CollectionLayout';

export default function CollectionPage({
    params,
}: {
    params: { id: string }
}) {
  const { id } = params;

  return (
    <CollectionLayout 
      title="Lebanese Economic Reforms"
      collectionId={id || '1'}
      collectionCount={12}
    />
  );
}