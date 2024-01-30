import React, { FC, FormEvent } from 'react'
import { Colors } from '@/assets/colors.ts'

interface Props {
  text: string
  className?: string
  disabled?: boolean
  onClick?: (e?: FormEvent) => void
  type?: 'primary' | 'delete' | 'side'
}

const buttonTypes = {
  primary: { backgroundColor: Colors.PATRIOT, color: '#fff' },
  delete: {
    backgroundColor: Colors.DELETE,
    border: `solid 2px ${Colors.DELETE_BORDER}`,
    color: '#fff',
  },
  side: {
    backgroundColor: '#fff',
    border: `solid 1px ${Colors.PATRIOT}`,
    color: `${Colors.PATRIOT}`,
  },
  disabled: { backgroundColor: '#cccccc', border: `solid 1px ${'#2c2c2c'}`, color: `#444444` },
  default: {},
}

const Button: FC<Props> = ({ text, type, disabled, className, onClick }) => {
  const getButtonStyles = () => {
    if (disabled) return buttonTypes.disabled
    return buttonTypes[type || 'default']
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={getButtonStyles()}
      className={`${className} shadow-2xl rounded-md px-4 py-1`}
    >
      {text}
    </button>
  )
}

export default Button
