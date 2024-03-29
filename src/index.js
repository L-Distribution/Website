import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from './routes/home';
import NotFound from './routes/404';
import Editor from './routes/editor';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

import 'normalize.css'

// https://stackoverflow.com/questions/29421409/how-to-load-all-files-in-a-directory-using-webpack-without-require-statements
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./style/', true, /\.scss/));

class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	}

	render () {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Editor path='/editor' />
					<NotFound default />
				</Router>
			</div>
		)
	}
}





export default App;
