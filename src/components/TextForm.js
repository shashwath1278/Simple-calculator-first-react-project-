import React,{useState} from 'react'

export default function TextForm() {

    const Upclick = ()=>{
       setText(eval(text));
    }

    const Downclick = ()=>{
      setText("");
    }
    
    const onChange= (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState(' ');
  return (
    <div>
 <div className="mb-3">
  <label for="Mytext" className="form-label">Enter your arithmetic problem</label>
  <textarea className="form-control" value={text} onChange={onChange} id="Mytext" rows="6" columns="10"></textarea>
</div>
<button className="btn btn-primary" onClick={Upclick} >enter</button>
&nbsp;&nbsp;
<button className="btn btn-primary" onClick={Downclick} >back</button>

</div>



  )
}

