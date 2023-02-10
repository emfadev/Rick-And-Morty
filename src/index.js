import React from "react";
import ReactDOM from "react-dom/client";
import { CharacterList } from "./components/CharacterList/Index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
	<React.StrictMode>
		<CharacterList />
	</React.StrictMode>
);