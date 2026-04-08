import React from 'react'

function Course({ image, course1 = "HTML", price }){
  return (
    <>
     <div className='card'>
        <img src={image} alt="" />

        <h1>{course1}</h1> <br />
        <h3>{price}</h3>
     </div>
    </>
  );

}

export default Course
