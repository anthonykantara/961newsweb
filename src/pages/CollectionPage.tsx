import React from 'react';
import { useParams } from 'react-router-dom';
import CollectionLayout from '../components/CollectionLayout/CollectionLayout';

export default function CollectionPage() {
  const { id } = useParams();

  return (
    <CollectionLayout 
      title="Lebanese Economic Reforms"
      collectionId={id || '1'}
      collectionCount={12}
    />
  );
}