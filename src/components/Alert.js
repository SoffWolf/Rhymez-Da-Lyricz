import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//access this.props.alerts
const Alert = ({ alerts }) => {
    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
            <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                {alert.msg}
            </div>
        ))
    );
}


Alert.propTypes = {
    alerts: PropTypes.array.isRequired
};

//add alerts property to props
const mapStateToProps = state => {
    return ({
        alerts: state.alert
    })
};

export default connect(mapStateToProps)(Alert);