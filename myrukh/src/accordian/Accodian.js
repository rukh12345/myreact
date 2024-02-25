import React, { useState } from 'react'
import {questions} from './Api';
import "./Accodian.css"
import Myaccordian from './Myaccordian';
const Accordian = () => {
    const [data, setData] = useState(questions);
  return (
    <>
    <section className="main-div container-fluid">
        <h1>Frequently Asked Question</h1>
    {
     data.map((curElem) => {
        const { id } =  curElem;
        return <Myaccordian key={ id } { ...curElem} />
     })
     }
     </section>
    </>
  )
}

export default Accordian
