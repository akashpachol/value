import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import React,{useState} from 'react';

function Demo() {
const [value1, setValue1] = useState()
const [value2, setValue2] = useState()


let formData=new FormData();

formData.append('value1',value1)
formData.append('value2',value2)

const valueSubmit=(e)=>{
  e.preventDefault()
Axios.post('https://dev.perfit.today/adding-two-numbers',formData)
.then((res)=>{
  console.log(res.data);
  
}).catch(()=>{
  console.log(error);
})
}

  

  return (
    <div>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Value1</Form.Label>
          <Form.Control  className="mb-3" type="number"value={value1} placeholder="Enter value" onChange={(e)=>setValue1(e.target.value)} />
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Value2</Form.Label>
          <Form.Control type="number" value={value2} placeholder="value" onChange={(e)=>setValue2(e.target.value)} />
        </Form.Group>
      
        <Button variant="primary" type="submit" onClick={valueSubmit} >
          Submit
        </Button>
      </Form>
   
      
    </div>

    

  );
}

export default Demo;