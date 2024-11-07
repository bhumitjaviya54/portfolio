import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import First from './timeline/First'
import Second from './timeline/Second';
import Third from './timeline/Third';
import Four from './timeline/Four';
import Fifth from './timeline/Fifth';
import Six from './timeline/Six';
import Seven from './timeline/Seven';
import Eight from './timeline/Eight';
import Nine from './timeline/Nine';
import Ten from './timeline/Ten';

const Experience = () => {
  const [workFirst, setworkFirst] = useState(true);
  const [workSecond, setworkSecond] = useState(false);
  const [workThird, setworkThird] = useState(false);
  const [workFour, setworkFour] = useState(false);
  const [workFifth, setworkFifth] = useState(false);
  const [workSix, setworkSix] = useState(false);
  const [workSeven, setworkSeven] = useState(false);
  const [workEight, setworkEight] = useState(false);
  const [workNine, setworkNine] = useState(false);
  const [workTen, setworkTen] = useState(false);

  const handleFirst = () => {
    setworkFirst(true);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(false);
    setworkTen(false);
  }

  const handleSecond = () => {
    setworkFirst(false);
    setworkSecond(true);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(false);
    setworkTen(false);
  }

  const handleThird = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(true);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(false);
    setworkTen(false);
  }
  const handleFour = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(true);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(false);
    setworkTen(false);
  }
  const handleFifth = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(true);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(false);
    setworkTen(false);
  }
  const handleSix = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(true);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(false);
    setworkTen(false);
  }
  const handleSeven = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(true);
    setworkEight(false);
    setworkNine(false);
    setworkTen(false);
  }
  const handleEight = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(true);
    setworkNine(false);
    setworkTen(false);
  }
  const handleNine = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(true);
    setworkTen(true);
  }
  const handleTen = () => {
    setworkFirst(false);
    setworkSecond(false);
    setworkThird(false);
    setworkFour(false);
    setworkFifth(false);
    setworkSix(false);
    setworkSeven(false);
    setworkEight(false);
    setworkNine(false);
    setworkTen(true);
  }

  return (
    <section id='timeline' className='gap-8 px-4 py-10 mx-auto max-w-containerSmall lgl:py-24'>
      <SectionTitle title='Proof of Work' titleNo='02' />
      <div className='flex flex-col w-full gap-16 mt-10 md:flex-row'>
        <ul className='flex flex-col md:w-32'>
          <li
            onClick={handleFirst}
            className={`${workFirst
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2022
          </li>
          <li
            onClick={handleSecond}
            className={`${workSecond
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2022
          </li>
          <li
            onClick={handleThird}
            className={`${workThird
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2023
          </li>
          <li
            onClick={handleFour}
            className={`${workFour
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2023
          </li>
          <li
            onClick={handleFifth}
            className={`${workFifth
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2023
          </li>
          <li
            onClick={handleSix}
            className={`${workSix
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2024
          </li>
          <li
            onClick={handleSeven}
            className={`${workSeven
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2024
          </li>
          <li
            onClick={handleEight}
            className={`${workEight
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2024
          </li>
          <li
            onClick={handleNine}
            className={`${workNine
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2024
          </li>
          <li
            onClick={handleTen}
            className={`${workTen
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}>
            2024
          </li>
        </ul>
        {workFirst && <First />}
        {workSecond && <Second />}
        {workThird && <Third />}
        {workFour && <Four />}
        {workFifth && <Fifth />}
        {workSix && <Six />}
        {workSeven && <Seven />}
        {workEight && <Eight />}
        {workNine && <Nine/>}
        {workTen && <Ten/>}
      </div>
    </section>
  )
}

export default Experience
