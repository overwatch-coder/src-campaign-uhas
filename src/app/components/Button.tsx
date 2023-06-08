import Link from 'next/link'
import React from 'react'

type ButtonProps = {
    text: string,
    classes?: string,
    path: string
}

const Button = ({text, classes, path}: ButtonProps) => {
  return (
    <Link
        href={path}
        className={classes}
    >
        {text} 
    </Link>
  )
}

export default Button