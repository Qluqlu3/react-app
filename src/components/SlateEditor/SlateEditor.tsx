import React, { useCallback, useMemo, useState } from 'react'

import { createEditor, Descendant } from 'slate'
import { withHistory } from 'slate-history'
import { RenderElementProps, Slate, Editable, withReact, RenderLeafProps } from 'slate-react'

import { Element } from './Element'
import { Toolbar } from './Toolbar'

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children }) => {
  return <span {...attributes}>{children}</span>
}

export const SlateEditor: React.FC = () => {
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: 'サンプルテキスト' }],
    },
  ]

  const [value, setValue] = useState<Descendant[]>(initialValue)

  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, [])

  const handleOnChange = useCallback((newValue: Descendant[]) => {
    setValue(newValue)
  }, [])

  return (
    <Slate editor={editor} initialValue={value} onChange={handleOnChange}>
      <Toolbar editor={editor} />
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} className='h-[500px] bg-white text-black' />
    </Slate>
  )
}
