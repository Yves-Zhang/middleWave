import React from 'react';
import { AuxButton, Provider } from '../../../editorComponents/index';
import { config } from '../../../editorComponents/Context'

import './style.less';

@Provider()
class H5page extends React.Component {
	componentDidMount() {
		console.log('这里也是didMounted')
	}

	postMessage = () => {
		window.top.postMessage(config);
	}

	render() {
		return (
			<div className="h5_page">
				<AuxButton Configurable={true} ConfigurableId="button_1">Test Button</AuxButton>

				<AuxButton style={{ position: 'fixed', bottom: 0 }} onClick={this.postMessage}>生成配置config</AuxButton>
			</div>
		);
	}
}

export default H5page;
