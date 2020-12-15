import React, {useEffect} from 'react';
import styles from './Button.module.scss';

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonKind = 'primary' | 'secondary'

export interface PropsButton {
    type?: ButtonType,
    kind?: ButtonKind,
    text: string
}

const Button: React.FC<PropsButton> = ({
    text,
    kind,
    type
}) => {
    useEffect(() => {
        
    }, [])

    return (
        <button className={`${styles.Button} Button--${kind}`} type={type} >
            {text}
        </button>
    )
}

export default Button;