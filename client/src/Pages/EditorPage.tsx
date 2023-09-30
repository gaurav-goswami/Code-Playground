import React from 'react'
import Editor from '../Components/Editor/Editor';
import CodeMembers from '../Components/Editor/CodeMembers';

const EditorPage : React.FC = () => {
  return (
    <>
        <div className='flex relative'>
            <CodeMembers />
            <Editor />
        </div>
    </>
  )
}

export default EditorPage;
