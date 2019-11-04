import React from "react";
import Sidebar from "./components/Sidebar";
import MainView from "components/MainView";
import { ViewsContextProvider } from "contexts/viewsContext";

const App = () => (
	<div className="App">
		<ViewsContextProvider>
			<Sidebar />
			<MainView />
		</ViewsContextProvider>
	</div>
);

export default App;
