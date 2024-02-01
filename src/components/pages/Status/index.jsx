const Status = ({ status = 'default', size }) => {
  const configPaddings = {
    sm: 'p-[10px] max-w-[22px] max-h-[22px]',
    md: 'p-[6px] max-w-8 max-h-8',
    lg: 'p-2 max-w-11 max-h-11',
  };

  const configHoverPaddings = {
    sm: 'hover:p-[14px] hover:max-w-[30px] hover:max-h-[30px]',
    md: 'hover:p-[10px]  hover:max-w-10 hover:max-h-10',
    lg: 'hover:p-3  hover:max-w-[52px] hover:max-h-[52px]',
  };

  const configSizes = {
    sm: 'w-[14px] h-[14px]',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
  };

  const configColors = {
    default: '',
    success: 'bg-alpha-6 border-alpha-8',
    warning: 'bg-alpha-4 border-alpha-10',
    error: 'bg-alpha-7 border-alpha-11',
  };

  return (
    <div
      className={`${configPaddings[size]} ${configColors[status]} p-[10px] ${configHoverPaddings[size]} w-full h-full  transition-[padding] rounded-full border-none flex justify-center items-center`}
    >
      <div
        className={`${configSizes[size]} ${configColors[status]} shrink-0 rounded-full border`}
      />
    </div>
  );
};

export default Status;
