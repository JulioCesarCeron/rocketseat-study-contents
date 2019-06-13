import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createAppContainer(
	createSwitchNavigator({
		Login,
        Timeline,
        New
	})
);

export default Routes;
