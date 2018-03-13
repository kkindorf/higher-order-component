import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    
    class Authentication extends Component {
        //this contextTypes object is used for react router so we can use context to push the app to be redirected if the user is not logged in
        static contextTypes = {
            router: React.PropTypes.object
        }
        componentWillMount() {
            if(!this.props.authenticated) {
                this.context.router.push('/');
            }
        }
        componentWillUpdate(nextProps) {
            
            if(!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }
        render() {
            return <ComposedComponent {...this.props} />
        }
    }
    function mapStateToProps(state) {
        return {authenticated: state.authenticated};
    }

    return connect(mapStateToProps)(Authentication);
}



