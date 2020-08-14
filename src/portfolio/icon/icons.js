import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import './icons.css'

function FixedWidthIcons() {
  return (
    <section className="check_icon">
      <FontAwesomeIcon icon={faCheck} fixedWidth />
    </section>
  );
}

export default FixedWidthIcons;
