import React from 'react';
import PropTypes from 'prop-types';

const Review = ({ steps }) => {
  const { name, email, number } = steps || {};

  return (
    <div style={{ width: '100%' }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name?.value}</td>
          </tr>
          <tr>
            <td>Email Id</td>
            <td>{email?.value}</td>
          </tr>
          <tr>
            <td>Number</td>
            <td>{number?.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;
