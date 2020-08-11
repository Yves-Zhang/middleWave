import React from 'react';
import { Props } from './proto';
import HocWrapper from '../HocWrapper'

import './style.less';

class PageComp extends React.Component {
    static defaultProps = new Props()

    componentDidMount() {
        this.props.didMountCallBack(this)
    }

    render() {
        return (
            <div className="aux_pageComp" style={{backgroundImage: `url(${this.props.bgImage})`}}>
								{this.props.text}
                {this.props.children}
            </div>
        );
    }
}

export default HocWrapper(PageComp);
