import { ButtonHTMLAttributes } from 'react'

import '../styles/button.scss'
// COMPONENETES BUTTON
// Repassando as proriedades da função butão para o botão
// Escrevo o tipo da propriedade e passo os tipos para o ...props:
// Atraves da biblioteca ButtonsAtribitte

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button( props: ButtonProps ) {
    return (
        <button className="button" {...props}/>
    )
}

 <Button />