import Confetti from 'react-confetti';
import { useWindowSize } from '../hooks/useWindowSize';

export const ConfettiCelebration = ({ show }) => {
  const { width, height } = useWindowSize();
  
  if (!show) return null;
  
  return (
    <Confetti 
      width={width} 
      height={height} 
      recycle={false}
      numberOfPieces={500}
      gravity={0.2}
    />
  );
};