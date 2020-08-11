import React from 'react';
import { Button } from 'antd';
import { Props } from './proto';
import HocWrapper from '../HocWrapper'

import './style.less'

class ToolBar extends React.PureComponent {
	static defaultProps = new Props();

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount(){
		this.props.didMountCallBack(this)
	}

	render() {
		return (
			<div className="toolBar"></div>
		);
	}
}

export default HocWrapper(ToolBar);
