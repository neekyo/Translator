import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
	state = { language: 'english' };

	onLangugeChange = (language) => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a language:
					<i onClick={() => this.onLangugeChange('english')} className="flag us" />
					<i onClick={() => this.onLangugeChange('dutch')} className="flag nl" />
				</div>
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
			</div>
		);
	}
}

export default App;
