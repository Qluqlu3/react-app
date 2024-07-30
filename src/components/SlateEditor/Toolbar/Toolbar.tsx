import clsx from 'clsx'
import { useCallback } from 'react'
import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs'
import { Editor, Transforms, Element } from 'slate'
import { ElementType } from '../Element'

interface Props {
  editor: Editor
}

const ICON_SIZE = 20

export const Toolbar: React.FC<Props> = ({ editor }: Props) => {
  const isBlockActive = useCallback((editor: any, format: string) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === format,
    })
    return !!match
  }, [])

  const toggleBlock = useCallback((editor: Editor, format: ElementType) => {
    const isActive = isBlockActive(editor, format)
    Transforms.setNodes(editor, { type: isActive ? 'paragraph' : format })
  }, [])

  const handleMouseDownIcon = useCallback((format: ElementType) => {
    toggleBlock(editor, format)
  }, [])

  return (
    <div className='flex flex-row justify-start items-start gap-x-5 h-[100px] p-2 w-full bg-white my-5 rounded-sm'>
      <button onClick={() => handleMouseDownIcon('heading-one')}>
        <BsTypeH1
          size={ICON_SIZE}
          className={clsx(isBlockActive(editor, 'heading-one') ? 'text-black' : 'text-gray-400')}
        />
      </button>
      <button onClick={() => handleMouseDownIcon('heading-two')}>
        <BsTypeH2
          size={ICON_SIZE}
          className={clsx(isBlockActive(editor, 'heading-two') ? 'text-black' : 'text-gray-400')}
        />
      </button>
      <button onClick={() => handleMouseDownIcon('heading-three')}>
        <BsTypeH3
          size={ICON_SIZE}
          className={clsx(isBlockActive(editor, 'heading-three') ? 'text-black' : 'text-gray-400')}
        />
      </button>
    </div>
  )
}
