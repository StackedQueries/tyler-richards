import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = ({content}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content,
    editable: false,  
  })

  return (
    <EditorContent editor={editor} />
  )
}

export default Tiptap