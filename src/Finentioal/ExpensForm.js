import { useState } from "react";
import './ExpensForm.css';
const ExpensForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [Enterdate, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const DataCollect = [title, amount, category, Enterdate];
    setSubmittedData([...submittedData, DataCollect]);
    setTitle("");
    setCategory("");
    setAmount("");
    setDate("");
  };
  let totalAmount = submittedData.reduce((sum, item) => sum + parseFloat(item[1]), 0);

  return (
    <div className="Contener">
      <form onSubmit={SubmitHandler}>
        <label>Title</label>
        <input value={title} type='text' onChange={(e) => setTitle(e.target.value)} />
        <label>Amount</label>
        <input value={amount} type='text' onChange={(e) => setAmount(e.target.value)} />
        <label>Date</label>
        <input value={Enterdate} type='date' onChange={(e) => setDate(e.target.value)} />
        <label>Category</label>
        <input value={category} type='text' onChange={(e) => setCategory(e.target.value)} />
        <button type='submit'>Add-Expenses</button>

      </form>
      
      {submittedData.map((item, index) => (
        <div key={index}>
          <div>Title: {item[0]}</div>
          <div>Amount: {item[1]}</div>
          <div>Date: {item[2]}</div>
          <div>Category: {item[3]}</div>
        </div>
      ))}
      <h1>Total Amount: {totalAmount.toFixed(2)}</h1>
    </div>
  );
};

export default ExpensForm;