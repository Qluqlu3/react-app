import React from 'react'

import { BaseEditor } from 'slate'
import { HistoryEditor } from 'slate-history'
import { ReactEditor, RenderElementProps } from 'slate-react'

type CustomText = { text: string }

type ParagraphElement = { type: 'paragraph'; children: CustomText[] }

type HeadingOneElement = { type: 'heading-one'; children: CustomText[] }
type HeadingTwoElement = { type: 'heading-two'; children: CustomText[] }
type HeadingThreeElement = { type: 'heading-three'; children: CustomText[] }
type CustomElement = HeadingOneElement | HeadingThreeElement | HeadingTwoElement | ParagraphElement

export type ElementType = 'heading-one' | 'heading-three' | 'heading-two' | 'paragraph'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & HistoryEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

export const Element: React.FC<RenderElementProps> = ({ attributes, children, element }: RenderElementProps) => {
  switch (element.type) {
    case 'heading-one':
      return (
        <h1 {...attributes} className='text-6xl font-bold'>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 {...attributes} className='text-4xl font-bold'>
          {children}
        </h2>
      )
    case 'heading-three':
      return (
        <h3 {...attributes} className='text-2xl font-bold'>
          {children}
        </h3>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}
