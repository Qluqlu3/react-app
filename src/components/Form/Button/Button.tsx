import React from 'react'

import clsx from 'clsx'

type Props = {
  label: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
  isDisabled?: boolean
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ label, type, variant = 'primary', isDisabled = false, onClick }: Props) => {
  const commonStyle = 'rounded-xl px-4 py-2 text-2xl'
  return (
    <>
      {variant === 'primary' && (
        <button
          className={clsx(commonStyle, isDisabled ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-500')}
          disabled={isDisabled}
          type={type}
          onClick={!isDisabled ? onClick : undefined}
        >
          {label}
        </button>
      )}
      {variant === 'secondary' && (
        <button
          className={clsx(`${commonStyle} bg-gray-500`, 'hover:bg-gray-400')}
          disabled={isDisabled}
          type={type}
          onClick={!isDisabled ? onClick : undefined}
        >
          {label}
        </button>
      )}
    </>
  )
}
