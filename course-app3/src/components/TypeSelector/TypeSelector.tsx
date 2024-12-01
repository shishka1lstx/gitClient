import {  useState, useEffect, useRef } from "react";
import './TypeSelector.scss' 
import { useSearchTypeContext } from "../../pages/HomePage/HomePage";

type Option = {
    key: string;
    value: string;
  };
  
export type TypeSelectorProps = {
    className?: string;
    options: Option[];
    value?: string;
  };

const TypeSelector: React.FC<TypeSelectorProps> = ({className, options, value}) => {
    const typeContext = useSearchTypeContext();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [inputValue, setInputValue] = useState(value || "");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
          ) {
            setDropdownOpen(false);
          }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);

    const handleSelect = (option: Option) => {
        typeContext.setType( option.key )
        setInputValue(option.value);
        setDropdownOpen(false);
    };

    return(
        <div className="typeSelector-body" ref={containerRef}>
            <div className="input-wrapper">
                <input className={`typeSelector__input ${className}`} placeholder="Type" onChange={(e) => setInputValue(e.target.value)} onFocus={() => setDropdownOpen(true)} type="text" value={inputValue}></input> 
                <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.835632 1.74738L2.16436 0.252563L10.5 7.66202L18.8356 0.252563L20.1644 1.74738L10.5 10.3379L0.835632 1.74738Z" fill="#AFADB5"/>
                </svg>

            </div>
            {options.length && (<div className="typeSelector__options">
                {isDropdownOpen && options.map( (op) => {
                return ( <button key={op.key}
                            className='typeSelector__options-item'
                            onClick={() => handleSelect(op)}
                            >{op.value}
                         </button>  )
            })}
            </div>)}
            
        </div>
        
    )
  }

export default TypeSelector;