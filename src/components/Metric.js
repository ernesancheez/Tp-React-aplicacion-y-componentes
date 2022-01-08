import React from 'react';
import PropTypes from 'prop-types';

function Metric({color, title, value, icon}) {
    
    return (
            <div class="col-md-4 mb-4">
          <div class={`card border-left-${color} shadow h-100 py-2`}>
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{title}</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                </div>
                <div class="col-auto">
                  <i class={`fas fa-${icon} fa-2x text-gray-300`}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

Metric.propTypes = {
    title : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
}

Metric.defaultProps = {
  color : "danger"
}

export default Metric
