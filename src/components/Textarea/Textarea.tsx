import React from 'react'

interface Props {}

export const Textarea: React.FC<Props> = ({}: Props) => {
  return <textarea cols={10} rows={130}></textarea>
}
