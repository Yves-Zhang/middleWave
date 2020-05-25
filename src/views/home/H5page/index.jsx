import React from 'react';
import { AuxButton, Provider, PageComp } from '../../../editorComponents/index';
import { config } from '../../../editorComponents/Context';

import './style.less';

@Provider()
class H5page extends React.Component {
	componentDidMount() {
		window.addEventListener('message', (event) => {
			if (event.data.type == 'change') {
				this.setState({
					config: event.data.config
				});
			}
		});
	}

	postMessage = () => {
		window.top.postMessage({
			type: 'init',
			config: config
		});
	};

	render() {
		return (
			<div className="h5_page">
				<PageComp Configurable={true} ConfigurableId="background">
					<div style={{ width: '100vw', textAlign: 'center', position: 'absolute', top: '50vh' }}>
						<AuxButton style={{ margin: '0 auto' }} Configurable={true} ConfigurableId="button_1" text="Test Button" />
					</div>

					<AuxButton
						style={{ position: 'fixed', bottom: 0, color: 'white', background: 'black' }}
						onClick={this.postMessage}
					>
						生成配置config
					</AuxButton>
				</PageComp>
			</div>
		);
	}
}

export default H5page;
