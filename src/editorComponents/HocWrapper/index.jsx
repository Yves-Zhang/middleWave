import React from 'react';
import { Consumer, config } from '../Context'


const HocWrapper = (Comp) => {
    return class extends React.PureComponent {
        didMountCallBack = (entity) => {
            if (!entity.props.Configurable || !entity.props.ConfigurableId) {
                return
            }

            const { Configurable, ConfigurableId } = entity.props

            config[ConfigurableId] = {}
            entity.props.conf.map((item, index) => {
                config[ConfigurableId][item.field] = entity.props[item.field] || null
            })
        }
        render() {
            return (
                <Consumer>
                    {
                        (pageConfig) => {
                            return (
                                <Comp {...this.props} {...pageConfig} didMountCallBack={this.didMountCallBack} />
                            )
                        }
                    }
                </Consumer>
            );
        }
    }
}

export default HocWrapper;
