const LoadingSpinner = ({ size = 'medium', text = 'Loading...' }) => {
  const sizeClasses = {
    small: 'h-8 w-8',
    medium: 'h-12 w-12',
    large: 'h-16 w-16'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  };

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative">
        {/* Outer ring */}
        <div className={`animate-spin rounded-full border-2 border-[#D8CFC4] ${sizeClasses[size]}`}></div>
        {/* Spinning accent ring */}
        <div 
          className={`absolute inset-0 animate-spin rounded-full border-t-2 border-[#C8A24A] ${sizeClasses[size]}`}
          style={{ animationDuration: '1.5s' }}
        ></div>
      </div>
      {text && (
        <p className={`mt-6 ${textSizeClasses[size]} text-[#3A3A3A]/70 font-light tracking-wide`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;