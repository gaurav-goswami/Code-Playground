import React from 'react'
import Editor from '../Components/Editor/Editor';

const EditorPage : React.FC = () => {
  return (
    <>
        <div className='flex gap-1'>
            <div className='w-[15%] border-gray-200'>
                <span className='text-white'>Members here</span>
            </div>
            <Editor />
        </div>
    </>
  )
}

export default EditorPage;
