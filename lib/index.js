'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDummyUpload = function (_React$Component) {
    _inherits(ReactDummyUpload, _React$Component);

    function ReactDummyUpload(props) {
        _classCallCheck(this, ReactDummyUpload);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.state = {};
        return _this;
    }

    ReactDummyUpload.prototype.loading = function loading() {
        return this.props.whenLoading || 'Loading...';
    };

    ReactDummyUpload.prototype.normal = function normal() {
        return this.props.children;
    };

    ReactDummyUpload.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            { className: this.props.className, onClick: this.onClick },
            this.props.loading ? this.loading() : normal(),
            this.props.loading && _react2.default.createElement(SvgIcon, { name: 'eduian-icon-spinner-light',
                color: variables.eduianGreen,
                title: 'Loading',
                className: 'image-spin' }),
            !this.props.loading && _react2.default.createElement('img', { src: this.props.account.photo.large.url, className: 'profile-page-img' })
        );
    };

    return ReactDummyUpload;
}(_react2.default.Component);

OmniLink.propTypes = {
    href: _propTypes2.default.string,
    to: _propTypes2.default.string,
    link: _propTypes2.default.oneOfType([_propTypes2.default.object.isRequired, _propTypes2.default.bool.isRequired])
};

exports.default = OmniLink;
module.exports = exports['default'];