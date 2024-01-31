import { motion } from 'framer-motion';

const ProgressSlider = ({ percent }) => (
  <div className='relative  w-20 h-2 bg-range-slider rounded-full overflow-hidden'>
    <motion.div
      className='h-full bg-yellow-gradient rounded-full'
      style={{ width: `${percent}%` }}
      transition={{ duration: 1 }}
      initial={{ width: '0%' }}
      animate={{ width: `${percent}%` }}
    />
  </div>
);

export default ProgressSlider;
