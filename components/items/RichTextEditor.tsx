import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div style={{  padding: '1em', minHeight: '400px' }}>
        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
        />
        
    </div>
  );
}