/*
  Dynamic-import target for LazyMotion. Keeping this as a standalone module
  that re-exports only `domMax` lets Vite tree-shake framer-motion's feature
  bundle into its own chunk — an in-line dynamic import of 'framer-motion'
  would pull the whole module into the async chunk.

  domMax includes animations + drag + layout + scroll (needed for the Crypto
  testimonial carousel which uses drag). domAnimation alone would be smaller
  but drops drag support.

  Per motion.dev/docs/react-reduce-bundle-size.
*/
import { domMax } from 'framer-motion';

export default domMax;
