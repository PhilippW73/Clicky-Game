import React from "react";
import "./Section.css";

const Section = (props) => <main className="container">
	{props.children}
</main>;

export default Section;