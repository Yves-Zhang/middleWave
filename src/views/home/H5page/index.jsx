import React from 'react';

import { AuxButton, Provider, Custom } from '../../../editorComponents/index';

import './style.less';

@Provider({})
class H5page extends React.Component {
	componentDidMount(){
		console.log('这里也是didMounted')
	}
	render() {
		return (
			<div className="h5_page">
				<AuxButton>Test Button</AuxButton>

				<AuxButton style={{ position: 'fixed', bottom: 0 }}>生成配置config</AuxButton>
			</div>
		);
	}
}

export default H5page;
