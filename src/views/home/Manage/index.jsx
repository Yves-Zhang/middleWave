import React from 'react';
import { SpaAssyConnect } from 'spaassy-redux';
import { setConfig } from '@store/pageConfig/pageConfig_action';
import { AuxButton } from '../../../editorComponents';
import { ConfigBox, Layout, Header, PreviewBox } from '../../../common/index';

import './style.less';

const LayoutItem = Layout.SubItem;

const namespace = process.env.SYSTEMNAME;

@SpaAssyConnect(namespace)((state) => ({ store: state }), { setConfig: setConfig })
class Manage extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			config: {}
		};
	}
	componentDidMount() {
		window.addEventListener('message', (event) => {
			if (event.data.type == 'init') {
				this.setState({
					config: event.data.config
				});
			}
		});
	}

	save = (config) => {
		document.getElementById('iframeRef').contentWindow.postMessage({
			type: 'change',
			config: config
		})
	};

	render() {
		return (
			<div className="page">
				<Header />
				<Layout background="rgb(234, 234, 234)">
					<LayoutItem span={18}>
						<PreviewBox id="iframeRef" iframeUrl="http://127.0.0.1:8080/#/H5page" />
					</LayoutItem>
					<LayoutItem span={6}>
						<ConfigBox config={this.state.config} save={this.save} />
					</LayoutItem>
				</Layout>
			</div>
		);
	}
}

export default Manage;
