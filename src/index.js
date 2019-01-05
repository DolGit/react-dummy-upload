import React from 'react'
import PropTypes from 'prop-types';

class ReactDummyUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

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

                {this.props.loading &&
                <SvgIcon name='eduian-icon-spinner-light'
                         color={variables.eduianGreen}
                         title='Loading'
                         className='image-spin' />
                }
                {!this.props.loading &&
                <img src={this.props.account.photo.large.url} className='profile-page-img' />
                }
            </div>
        )
    }
}

OmniLink.propTypes = {
    href: PropTypes.string,
    to: PropTypes.string,
    link:   PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.bool.isRequired
    ])
};

export default OmniLink