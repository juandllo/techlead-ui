import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Layout from '../layout/Layout';
import NotFound from '../../pages/notFound/NotFound';
import './App.css';


function App() {
	  return (
		<div className="App">
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home/>} />
						<Route path="*" element={<NotFound/>} />
					</Routes>
				</Layout>	
			</BrowserRouter>
		</div>
  );
}

export default App;
