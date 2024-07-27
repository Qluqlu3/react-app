import React from 'react'
import { ReactEditor, RenderElementProps } from 'slate-react'
import { HistoryEditor } from 'slate-history'
import { BaseEditor } from 'slate'

type CustomText = { text: string }

type ParagraphElement = { type: 'paragraph'; children: CustomText[] }

type HeadingOneElement = { type: 'heading-one'; children: CustomText[] }
type HeadingTwoElement = { type: 'heading-two'; children: CustomText[] }
type HeadingThreeElement = { type: 'heading-three'; children: CustomText[] }
type CustomElement = ParagraphElement | HeadingOneElement | HeadingTwoElement | HeadingThreeElement

export type ElementType = 'paragraph' | 'heading-one' | 'heading-two' | 'heading-three'

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

export const Element: React.FC<RenderElementProps> = ({ attributes, children, element }: RenderElementProps) => {
  switch (element.type) {
    case 'heading-one':
      return (
        <h1 {...attributes} className="text-7xl">
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 {...attributes} className="text-5xl">
          {children}
        </h2>
      )
    case 'heading-three':
      return (
        <h3 {...attributes} className="text-3xl">
          {children}
        </h3>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}
