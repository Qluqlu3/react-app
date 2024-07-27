import React from 'react'

interface Props {}

export const Textarea: React.FC<Props> = ({}: Props) => {
  return <textarea rows={10} className="w-full text-xl text-white" placeholder="textarea..." />
}
