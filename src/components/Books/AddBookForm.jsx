import React from 'react'
import Button from '../Commons/Button'
import Input from '../Commons/Input'
import classes from './AddBookForm.module.css'
import _uniqueId from 'lodash/uniqueId'
import { useState, useRef } from 'react'

const AddBookForm = (props) => {
    const [id] = useState(_uniqueId('prefix-'));

    const inputRef=useRef();
    //console.log(inputRef);

    //button type은 submit()이고 onclicke이벤트 발생시
    //핸들러함수는 submitHandler, Button의 content는 add
    const submitHandler = (event)=> {
        event.preventDefault();
        //console.log('submit called');
        //event.target.value
        //console.log(inputRef.current.value);

        //값이 string으로 나와서 정수로 바꾸기
        const amountValue=inputRef.current.value;
        //1
        // const numberValue=Number(amountValue);
        //2
        const amountValuetoNumber=+amountValue;
        //3
        //const amountValue=parseInt(inputRef.current.value);

        props.onAddToCart(amountValuetoNumber);
    };

  return (
      <form className={classes.form}>
          <Input ref={inputRef} label='Amount' input={ {id: id, type: 'number', defaultValue: '1'} }/>
          <Button type="submit" onClick={submitHandler}>Add</Button>
      </form>
  )
}

export default AddBookForm