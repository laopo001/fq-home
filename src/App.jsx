import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<DocumentTitle title="123123">
				<LocaleProvider locale={enUS}>
					<div className="App">
						<header className="App-header">
							<img src={logo} className="App-logo" alt="logo" />
							<h1 className="App-title">Welcome to React</h1>
						</header>
						<p className="App-intro">
							To get started, edit <code>src/App.js</code> and save to reload.
          	</p>
					</div>
				</LocaleProvider>
			</DocumentTitle>
		);
	}
}

export default App;
