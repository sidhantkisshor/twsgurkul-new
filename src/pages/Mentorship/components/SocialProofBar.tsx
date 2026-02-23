import { motion } from 'framer-motion';

const proofItems = [
  'Rahul from Jaipur joined 2 hours ago',
  'Priya, Chennai — Month 2, first green week',
  'Amit, Nagpur — ₹34k profit this month',
  'Sneha from Lucknow just enrolled',
  'Vikram, Pune — 6 green weeks in a row',
  'Deepak, Indore — "Best decision I made this year"',
  'Meera, Kolkata — started with ₹10k, now consistent',
  'Arjun, Hyderabad joined yesterday',
];

export default function SocialProofBar() {
  return (
    <div className="bg-deep-slate py-3 overflow-hidden border-t border-soft-sand/10">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {[...proofItems, ...proofItems].map((item, i) => (
          <span key={i} className="text-soft-sand/70 text-sm font-normal flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-wealth-teal flex-shrink-0" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
