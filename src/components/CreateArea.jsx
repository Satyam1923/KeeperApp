import React,{useState, useTransition} from "react";

function CreateArea(props) {
  const [input,setInput] = useState({title:"", content:""})
  const [blank,setBlank] = useState(true);
  function handleChange(event) {
    const { value, name } = event.target;
    setInput(prevValue => ({
      ...prevValue,
      [name]: value
    }));
    setBlank(false);
  }

  function handleClick(event){
    event.preventDefault();
    if (!blank) {
      props.onAdd(input);
      setInput({ title: "", content: "" });
      setBlank(true);
    }
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
