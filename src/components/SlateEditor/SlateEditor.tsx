import React, { useCallback, useMemo, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { RenderElementProps, Slate, Editable, withReact, RenderLeafProps } from 'slate-react'
import { Element } from './Element'
import { Toolbar } from './Toolbar'
import { withHistory } from 'slate-history'

interface Props {}

const Leaf: React.FC<RenderLeafProps> = ({ attributes, children }) => {
  return <span {...attributes}>{children}</span>
}

export const SlateEditor: React.FC<Props> = ({}: Props) => {
  const initialValue: Descendant[] = [
    {
      type: 'paragraph',
      children: [{ text: 'This is editable text.' }],
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
      <Editable renderElement={renderElement} renderLeaf={renderLeaf} className='bg-white h-[500px] text-black' />
    </Slate>
  )
}
