import React from 'react';
import { AuxButton } from '../../../editorComponents';
import { ConfigBox, Layout, Header, PreviewBox } from '../../../common/index';

import './style.less';

const LayoutItem = Layout.SubItem;

class Manage extends React.PureComponent {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		window.addEventListener("message", (event) => {
			console.log(event.data)
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
						<ConfigBox />
					</LayoutItem>
				</Layout>
			</div>
		);
	}
}

export default Manage;
