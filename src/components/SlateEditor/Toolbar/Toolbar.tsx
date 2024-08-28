import React, { useCallback } from 'react'

import clsx from 'clsx'
import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs'
import { Editor, Transforms, Element } from 'slate'

import { ElementType } from '../Element'

interface Props {
  editor: Editor
}

const ICON_SIZE = 20

export const Toolbar: React.FC<Props> = ({ editor }: Props) => {
  const isBlockActive = useCallback((editor: Editor, format: string) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    })
    return !!match
  }, [])

  const toggleBlock = useCallback(
    (editor: Editor, format: ElementType) => {
      const isActive = isBlockActive(editor, format)
      Transforms.setNodes(editor, { type: isActive ? 'paragraph' : format })
    },
    [isBlockActive],
  )

  const handleMouseDownIcon = useCallback(
    (format: ElementType) => {
      toggleBlock(editor, format)
    },
    [editor, toggleBlock],
  )

  return (
    <div className='my-5 flex h-[100px] w-full flex-row items-start justify-start gap-x-5 rounded-sm bg-slate-300 p-2'>
      <button onClick={() => handleMouseDownIcon('heading-one')}>
        <BsTypeH1
          className={clsx(isBlockActive(editor, 'heading-one') ? 'text-black' : 'text-gray-400')}
          size={ICON_SIZE}
        />
      </button>
      <button onClick={() => handleMouseDownIcon('heading-two')}>
        <BsTypeH2
          className={clsx(isBlockActive(editor, 'heading-two') ? 'text-black' : 'text-gray-400')}
          size={ICON_SIZE}
        />
      </button>
      <button onClick={() => handleMouseDownIcon('heading-three')}>
        <BsTypeH3
          className={clsx(isBlockActive(editor, 'heading-three') ? 'text-black' : 'text-gray-400')}
          size={ICON_SIZE}
        />
      </button>
    </div>
  )
}
