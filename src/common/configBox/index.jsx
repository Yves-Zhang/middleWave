import React from 'react';
import { Collapse, Form, Input, Select, Switch, Icon } from 'antd';

import './style.less';

const { Panel } = Collapse;
const { Option } = Select;

class ConfigBox extends React.PureComponent {
	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	createOption = (options) => {
		return options.map((option, index) => {
			return (
				<Option value={option.value} key={index}>
					{option.text}
				</Option>
			);
		});
	};

	createPanelChildren = (arg, confItem, key) => {
		const { getFieldDecorator } = this.props.form;
		return arg.map((item, index) => {
			switch (item.type) {
				case 'string':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(`${key}_${item.field}`, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Input />)}
						</Form.Item>
					);
				case 'select':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(`${key}_${item.field}`, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Select>{this.createOption(item.data)}</Select>)}
						</Form.Item>
					);
				case 'boolean':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(`${key}_${item.field}`, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Switch />)}
						</Form.Item>
					);
				case 'string':
					return (
						<Form.Item label={item.text} key={index}>
							{getFieldDecorator(`${key}_${item.field}`, {
								rules: [],
								initialValue: confItem[item.field] || null
							})(<Input />)}
						</Form.Item>
					);
			}
		});
	};

	createContent = (config) => {
		const panelList = [];
		return Object.keys(config).map((key, index) => {
			const item = config[key];
			return (
				<Panel header={key} key={index}>
					{this.createPanelChildren(item.conf || [], item, key)}
				</Panel>
			);
		});
	};

	callback = () => {};

	render() {
		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 8 }
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 16 }
			}
		};
		return (
			<div className="aux_configBox">
				<div className="aux_conf_title">
					<span style={{ display: 'inline-block', fontWeight: '500' }}>页面配置</span>
					<ul className="rightBox">
						<li className="aux_li">
							<Icon type="save" onClick={() => {}} />
						</li>
					</ul>
				</div>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Collapse onChange={this.callback}>{this.createContent(this.props.config)}</Collapse>
				</Form>
			</div>
		);
	}
}

ConfigBox = Form.create()(ConfigBox);

export default ConfigBox;
