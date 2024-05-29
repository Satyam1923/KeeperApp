import React,{useState} from "react";

function CreateArea(props) {
  const [input,setInput] = useState({title:"", content:""})
  
  function handleChange(event) {
    const { value, name } = event.target;
    setInput(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  }

  function handleClick(event){
    event.preventDefault();
    props.onAdd(input);
    setInput({title:"",content:""})
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={input.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={input.content} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
