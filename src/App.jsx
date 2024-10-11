import React, { useState } from 'react'
import Components1 from './Components/Components1'
import Components2 from './Components/Components2'

const App = () => {
  const [data, setdata] = useState("basic data")
  return (
    <div className='w-[70%] m-auto p-[5%] rounded-xl bg-zinc-100'>
      <h1 className='text-5xl font-extrabold'>Reusing components</h1>


      <Components1 data={data} setdata={setdata} />

      <Components2><h1>{data}</h1></Components2>
    </div>
  )
}

export default App



