import { ButtonHTMLAttributes } from "react"

import "../styles/button.scss"
// Criando um componentes button 
// Passando props para esse botão
// Copiando as propriedasdes para todos os botão
// ...props (Distribuindo todas as propriedades)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
    
}

<Button />