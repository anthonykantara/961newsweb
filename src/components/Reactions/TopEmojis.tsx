import { Emoji } from '../../types/emoji';
import { motion, AnimatePresence } from 'framer-motion';

interface TopEmojisProps {
  emojis: Emoji[];
  onEmojiClick: (emoji: Emoji) => void;
}

export default function TopEmojis({ emojis, onEmojiClick }: TopEmojisProps) {
  return (
    <div className="flex flex-wrap gap-3">
      <AnimatePresence mode="popLayout">
        {emojis.slice(0, 4).map((emoji) => (
          <motion.button
            key={emoji.id}
            layout
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onEmojiClick(emoji)}
            className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl">{emoji.symbol}</span>
            <span className="text-base text-gray-600 font-medium">{emoji.count}</span>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}