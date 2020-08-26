import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<Container>
				<div>
					&copy; {year} | build with <span>❤️ </span> by{" "}
					<a href="https://www.linkedin.com/in/saiefalemon/">Saief Al Emon</a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
