import React from 'react'
import PropTypes from 'prop-types';

class ReactDummyUpload extends React.Component {
    loading() {
        return this.props.whenLoading || 'Loading...'
    }

    normal() {
        return this.props.children
    }

    render() {
        return (
            <div className={this.props.className} onClick={this.onClick}>
                {this.props.loading ? this.loading() : normal()}
            </div>
        )
    }
}

ReactDummyUpload.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.string,
    whenLoading: PropTypes.object,
};

export default ReactDummyUpload