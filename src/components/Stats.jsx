export const Stats = ({ remaining, total }) => {
  const completionPercentage = total > 0 ? Math.round(((total - remaining) / total) * 100) : 0;
  
  return (
    <div className="flex justify-between items-center mt-6 text-sm text-white/80">
      <span>{remaining} of {total} tasks remaining</span>
      <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
    </div>
  );
};