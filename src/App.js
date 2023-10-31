import React from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>React Js Forms - BY AMAN</h1>

        <div className='form-group'>
        <label htmlFor='name'>Full Name</label>
        <input type='text' placeholder='Example Singh' />
        </div>

        <div className='form-group'>
        <label htmlFor='name'>Phone No</label>
        <input type='text' placeholder='9900000000' />
        </div>

        <div className='form-group'>
        <label htmlFor='email'>Email ID</label>
        <input type='email' placeholder='ExampleSingh@gmail.com' />
        </div>

        <div className='button'>
        <button>Submit</button>
        </div>

    </div>
  )
}

export default App;
