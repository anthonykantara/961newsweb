import { Post } from '../../types/post';

export function getAspectRatioClass(type: Post['type']): string {
  switch (type) {
    case 'vertical-video':
      return 'aspect-[9/16] max-w-[360px] mx-auto';
    case 'horizontal-video':
      return 'aspect-[16/9]';
    default:
      return 'aspect-[2/1]';
  }
}