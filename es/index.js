function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';

var ReactDummyUpload = function (_React$Component) {
    _inherits(ReactDummyUpload, _React$Component);

    function ReactDummyUpload() {
        _classCallCheck(this, ReactDummyUpload);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    ReactDummyUpload.prototype.loading = function loading() {
        return this.props.whenLoading || 'Loading...';
    };

    ReactDummyUpload.prototype.normal = function normal() {
        return this.props.children;
    };

    ReactDummyUpload.prototype.render = function render() {
        return React.createElement(
            'div',
            { className: this.props.className, onClick: this.onClick },
            this.props.loading ? this.loading() : this.normal()
        );
    };

    return ReactDummyUpload;
}(React.Component);

ReactDummyUpload.propTypes = process.env.NODE_ENV !== "production" ? {
    className: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.string,
    whenLoading: PropTypes.object
} : {};

export default ReactDummyUpload;