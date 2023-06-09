import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ArchitecturePage from './pages/ArchitecturePage';
import ExpositionTourPage from './pages/ExpositionTourPage';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <PrintPage />,
// 	},
// 	{
// 		path: '/architecture',
// 		element: <ArchitecturePage />,
// 	},
// 	{
// 		path: '/map',
// 		element: <ExpositionTourPage />,
// 	},
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
