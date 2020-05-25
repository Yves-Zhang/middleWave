import React from 'react';
import { Button } from 'antd';
import { Props } from './proto';
import HocWrapper from '../HocWrapper'

class AuxButton extends React.PureComponent {
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
			<Button
				style={this.props.style}
				ghost={this.props.ghost}
				icon={this.props.icon}
				loading={this.props.loading}
				size={this.props.size}
				target={this.props.target}
				type={this.props.type}
				onClick={this.props.onClick}
			>
				{this.props.text}
			</Button>
		);
	}
}

export default HocWrapper(AuxButton);
