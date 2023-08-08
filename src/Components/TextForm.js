import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
      }
    const handleOnChange=(event)=>{
        setText(event.target.value);
      }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
      }
      const[text, setText]=useState("");
      return (
          <>
          <div className="mx-20 py-10">
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div className="">
                      <h1 className="block text-purple-700 text-4xl mb-2 font-bold">
                          Enter the text below to analyze
                      </h1>
                      <textarea onChange={handleOnChange} value={text} className="w-full px-0 text-lg text-gray-900 bg-white border-1 focus:ring-0 dark:text-white" id="myBox" cols="100" rows="8"></textarea>
                  </div>
              </form>
              <button onClick={handleUpClick} className="mx-8 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                Convert to Uppercase
              </button>
              <button onClick={handleLoClick} className="mx-8 px-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
                Convert to Lowercase
              </button>
          </div>
          <div className="mx-20 py-10 px-8 pt-6 pb-8 mb-4">
              <h2 className="block text-purple-700 text-4xl mb-2 font-bold">
                  Your Text Summary
              </h2>
              <p>{text.split(" ").length-1} Words , {text.length} Characters</p>
              <p>{0.008*(text.split(" ").length-1)} Minutes Read</p>
              <h2 className="block text-purple-700 text-4xl mb-2 font-bold mt-9">
                  Preview
              </h2>
              <p>{text}</p>
          </div>
          </>
  )
}
