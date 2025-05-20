// @ts-ignore
import logoImg from "../../assets/logo.PNG";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoImg} alt='DFM Logo' className='h-12 w-auto' />
      {/* <div className='ml-2'> */}
      {/* <span className='block text-xs text-accent font-semibold'>DATA</span> */}
      {/* <span className='block text-sm font-bold text-primary'>
          FLOUR MILLS
        </span> */}
      {/* </div> */}
    </div>
  );
};

export default Logo;
