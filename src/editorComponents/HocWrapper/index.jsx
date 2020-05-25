import React from 'react';
import { Consumer, config } from '../Context';

const HocWrapper = (Comp) => {
	return class extends React.PureComponent {
		didMountCallBack = (entity) => {
			if (!entity.props.Configurable || !entity.props.ConfigurableId) {
				return;
			}

			const { Configurable, ConfigurableId } = entity.props;

			config[ConfigurableId] = {};
			config[ConfigurableId].conf = entity.props.conf;
			entity.props.conf.map((item, index) => {
				config[ConfigurableId][item.field] = entity.props[item.field] || null;
			});
		};
		render() {
			return (
				<Consumer>
					{(pageConfig) => {
						const { Configurable, ConfigurableId } = this.props;
						let config = null;
						if (pageConfig && ConfigurableId && pageConfig.config && pageConfig.config[ConfigurableId]) {
							config = pageConfig.config[ConfigurableId];
						}
						return <Comp {...this.props} {...config} didMountCallBack={this.didMountCallBack} />;
					}}
				</Consumer>
			);
		}
	};
};

export default HocWrapper;
