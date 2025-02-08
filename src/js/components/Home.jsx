import React, { useState } from "react";


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="container">
			<h1>Mis Tareas Pendientes</h1>
			<ul>
				<li>
					<input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter" && inputValue.trim() !=="") {
							setTodos([...todos, inputValue]);
							setInputValue("");
						}
					}}
					placeholder="Que Quieres Hacer?"></input>
				</li>
				{todos.map((item, index) => (
					<li>
						{item}{" "}
						<i className="fa-regular fa-trash-can"
							onClick={() =>
								setTodos(
									todos.filter(
									(t, currentIndex) =>
										 index != currentIndex
								)
							)}></i>
					</li>
				))}
			</ul>
			<div>{todos.length} Tareas</div>
		</div>
	);
}

export default Home;