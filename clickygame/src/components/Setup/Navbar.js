import React from "react";
import "./Navbar.css";

const Navbar = (props) => <nav className="navbar">
	<ul>
		<li className="brand">
			<a href="/">Clicky Game</a>
		</li>
		<li className="">{props.RightOrWrong}</li>
		<li>Score: {props.Score} | Top Score: {props.TopScore}</li>
	</ul>
</nav>;

export default Navbar;