import React from 'react'

const About = () => {
    function hide(){
        document.querySelector('#about').style.color = 'blue';
    }
  return (
    <div onClick={hide} id="about">About</div>
  )
}

export default About