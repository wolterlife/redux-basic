import React from "react";
import imgBack from "../../img/back.png";
import './BackButton.css'
import {Link} from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <img src={imgBack} alt={"Назад"} className={"backImg"}/>
    </Link>
  )
}

export default BackButton