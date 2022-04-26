import React from "react";
import Links from "./Links"
function About(props) {
  
  const checkBio = () => {
    if(props.hasOwnProperty('key')){
      if(props.bio !== ''){
        return <p>{props.bio}</p>
      }
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.links}/>
    </div>
  );
}

export default About;
