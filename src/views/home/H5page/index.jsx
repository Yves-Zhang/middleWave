import React from 'react';
import { AuxButton, Provider, PageComp, ToolBar } from '../../../editorComponents/index';
import { config } from '../../../editorComponents/Context';
// import {loadzzConfig} from '../../../libs/commonJs/requestAPI';
import { SpaAssyConnect } from 'spaassy-redux'
import { setConfig } from '@store/pageConfig/pageConfig_action'

import './style.less';


@Provider()
@SpaAssyConnect(process.env.SYSTEMNAME)(state => ({ pageConfig: state.pageConfig }), { setConfig })
class H5page extends React.Component {
	componentDidMount() {
		window.addEventListener('message', (event) => {
			if (event.data.type == 'change') {
				this.setState({
					config: event.data.config
				});
			}
		});
		// this.getConfigData('39')
	}

	postMessage = () => {
		window.top.postMessage({
			type: 'init',
			config: config
		});
	};

	// async getConfigData(flag){
	// 	const cfg = await loadzzConfig(1430, flag);
	// 	console.log(cfg)
	// 	this.props.setConfig(cfg)
	// }

	render() {
		return (
			<div className="h5_page">
				<ToolBar />
				<PageComp Configurable={true} ConfigurableId="background">
				<AuxButton
						Configurable={true} 
						ConfigurableId="testButton"
						style={{ position: 'absolute', top: '140vw', color: 'white', background: 'black', width: '196px' }}
						onClick={this.postMessage}
						text="这是一个测试"
					/>
					<AuxButton
						style={{ position: 'fixed', bottom: 0, color: 'white', background: 'black' }}
						onClick={this.postMessage}
						text="生成配置config"
					/>
				</PageComp>
			</div>
		);
	}
}

export default H5page;
