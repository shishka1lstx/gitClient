import * as React from 'react'
import classNames from 'classnames'
import './text.css'

export type TextProps = {
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?:  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
    
};

const Text: React.FC<TextProps> = ({className, tag = 'p', weight, children, color = 'primary', maxLines, view}) => {
    const classes = classNames(
        'text',
        className && className,
        {[`${view}`]: view}
     );

    const Tag = tag as keyof JSX.IntrinsicElements;

    return(
        <Tag className={classes} style={{
            color: `var(--text-color-${color}),
            WebkitLineClamp: ${maxLines},
            WebkitBoxOrient: maxLines ? 'vertical' : undefined,
            overflow: maxLines ? 'hidden' : undefined, 
        )`, fontWeight: `${weight}`, }} >{children}</Tag>
    )
}

export default Text;
