import './loader.scss'


export type LoaderProps = {
  /** Размер */
  size?: 's' | 'm' | 'l';
  /** Дополнительный класс */
  className?: string;
  style?: string;
};

const Loader: React.FC<LoaderProps> = ( {size = 'm', className = '',  style = 'var(--brend)'} ) =>{
  if(size != 'm')
    return ( <div className={`loader ${size} ${className}`} style={{color: `${style}`}}></div>)
  return ( <div className={`loader ${className}`}></div>)
};

export default Loader;
