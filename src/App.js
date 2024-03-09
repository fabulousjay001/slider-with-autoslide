import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
	const [index, setIndex] = useState(0);
	const { image, name, title, quote, id } = data[index];

	useEffect(() => {
		const slider = setInterval(() => {
			setIndex((prevIndex) => checkNumber(prevIndex + 1));
		}, 3000); // Adjust the interval duration as needed

		return () => clearInterval(slider); // Clear the interval on component unmount
	}, []);

	const checkNumber = (number) => {
		if (number > data.length - 1) {
			return 0;
		} else if (number < 0) {
			return data.length - 1;
		} else {
			return number;
		}
	};

	const prevItem = () => {
		setIndex(checkNumber(index - 1));
	};

	const nextItem = () => {
		setIndex(checkNumber(index + 1));
	};
	console.log(data);
	return (
		<section className="section">
			<div className="title">
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			<article className="section-center" key={id}>
				<div className="img-container">
					<img src={image} className="person-img" alt={name} />
					<h4>{name}</h4>
					<p className="title">{title}</p>
					<div className="">
						<button className="prev" onClick={prevItem}>
							<FiChevronLeft />
						</button>
						<button className="next" onClick={nextItem}>
							<FiChevronRight />
						</button>
					</div>
					<p className="text">{quote}</p>
					<div className="icon">
						<FaQuoteRight />
					</div>
				</div>
			</article>
		</section>
	);
}

export default App;
