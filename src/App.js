import './App.css'; 

import TextForm from "./components/TextForm"; 

function App() {
  return (
<>

    
     
      
      <div className="container">
  <div className="text-block"><p>
    <center><h3> SIMPLE&nbsp;CALCULATOR </h3></center><br/>
      BASIC JS ARITHMETIC OPERATORS<br /><br />

    Operator&nbsp;&nbsp;&nbsp;&nbsp;Description<br /><br />

      +&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Addition<br />
      -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtraction<br />
      *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiplication<br />
      **&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exponentiation(ES2016)<br />
      /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Division<br />
      %&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modulus (Remainder)
    </p>
  </div>

  <div className="container"><TextForm/></div>
</div>


      </>
  );
}

export default App;