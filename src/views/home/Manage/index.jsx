import React from 'react';
import { AuxButton } from '../../../editorComponents';
import { ConfigBox, Layout, Header, PreviewBox } from '../../../common/index';

import './style.less';

const LayoutItem = Layout.SubItem;

class Manage extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			config: {}
		}
	}
	componentDidMount() {
		window.addEventListener("message", (event) => {
			this.setState({
				config: event.data
			})
		})
	}
	render() {
		return (
			<div className="page">
				<Header />
				<Layout background="rgb(234, 234, 234)">
					<LayoutItem span={18}>
						<PreviewBox iframeUrl="http://127.0.0.1:9001/#/H5page" />
					</LayoutItem>
					<LayoutItem span={6}>
						<ConfigBox config={this.state.config} />
					</LayoutItem>
				</Layout>
			</div>
		);
	}
}

export default Manage;
