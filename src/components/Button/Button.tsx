import React from 'react'
import clsx from 'clsx'

type Props = {
  label: string
  variant?: 'primary' | 'secondary'
  isDisabled?: boolean
  onClick?: () => void
}

export const Button: React.FC<Props> = ({ label, variant = 'primary', isDisabled = false, onClick }: Props) => {
  const commonStyle = 'rounded-xl px-4 py-2 text-2xl'
  return (
    <>
      {variant === 'primary' && (
        <button
          disabled={isDisabled}
          className={clsx(commonStyle, isDisabled ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-500')}
          onClick={!isDisabled ? onClick : undefined}
        >
          {label}
        </button>
      )}
      {variant === 'secondary' && (
        <button
          disabled={isDisabled}
          className={clsx(`${commonStyle} bg-gray-500`, 'hover:bg-gray-400')}
          onClick={!isDisabled ? onClick : undefined}
        >
          {label}
        </button>
      )}
    </>
  )
}
