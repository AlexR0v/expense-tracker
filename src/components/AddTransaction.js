import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
    setAmount(0)
    setText('')
  }

  return (
    <>
      <h3>Введите транзакцию</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Текст</label>
          <input
            type='text'
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='Введите текст...'
          />
        </div>
        <div className='form-control'>
          <label
            htmlFor='amount'
          >Количество <br />
           (отрицательное - расход, положительное - доход)</label
          >
          <input
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder='Введите кол-во...'
          />
        </div>
        <button className='btn'>Добавить транзакцию</button>
      </form>
    </>
  )
}

export default AddTransaction
