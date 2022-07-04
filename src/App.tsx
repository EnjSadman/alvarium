import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { BottomMenu } from './components/BottomMenu/BottomMenu';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Phone } from './react-app-env';
import { setPhonesArrayAction } from './store/actions';

const isPathExist = (path : string) => {
	try {
		return require(`./components/card/products/${path}`);
	} catch (err) {
		return null;
	}
};

function App() {
	const dispatch = useDispatch();
	const data = require('./api/products.json').products;

	useEffect(() => {
		const localObject  = localStorage.getItem('objToAdd'); 

		if (localObject !== null) {
			const parsedLocalObject : Phone = JSON.parse(localObject);
			if (localObject !== null) {
				if (!isPathExist(localObject['image' as any])) {
					(parsedLocalObject.image = '1.jpg');
				}
			}
			dispatch(setPhonesArrayAction([...data, parsedLocalObject]));
		} else {
			dispatch(setPhonesArrayAction(data));
		}
    
	});
	return (
		<div className="App">
			<div className="App__container container">
				<div className="App__content">
					<Sidebar />
					<CardsContainer />
				</div>
				<div className="App__menu">
					<BottomMenu />
				</div>
			</div>
		</div>
	);
}

export default App;
