import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredName,setEnteredName]=useState('');
  const [enteredCategory,setEnteredCategory]=useState('');
  const [isValid,setisValid]=useState(true);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const priceInputChangeHandler = event => {
    setEnteredPrice(event.target.value);
  };
  const categoryInputChangeHandler = event => {
    setEnteredCategory(event.target.value);
  };

  const formSubmitHandler = event => {
    if(enteredName.trim().length>0&&enteredPrice>0){
      setisValid(true);
    }
    event.preventDefault();
    if(enteredName.trim().length===0){
      setisValid(false);
      return;
    }
    props.onAddGoal(enteredName,enteredPrice,enteredCategory);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label>Item Name</label>
        <input type="text" onChange={nameInputChangeHandler} />
      </div>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label >Item Price</label>
        <input type="number" onChange={priceInputChangeHandler} />
      </div>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label >Item Category</label>
        <input type="text" onChange={categoryInputChangeHandler} />
      </div>
      <Button type="submit" className={`form-control ${!isValid?'invalid':''}`} >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
