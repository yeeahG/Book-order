import React from 'react'
import Button from '../Commons/Button'
import Input from '../Commons/Input'
import classes from './AddBookForm.module.css'

const AddBookForm = () => {
    //button type은 submit()이고 onclicke이벤트 발생시
    //핸들러함수는 submitHandler, Button의 content는 add
    const submitHandler = ()=> {};

  return (
      <form className={classes.form}>
          <Input label='Amount' input={ {id: 'amount', type: 'number', defaultValue: '1'} }/>
          <Button type="submit" onClick={submitHandler}>Add</Button>
      </form>
  )
}

export default AddBookForm