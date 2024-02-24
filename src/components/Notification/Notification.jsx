import PropTypes from "prop-types";

export const Notification = ({ message }) => {
  return <h4 style={{color:'red'}}>{message}</h4>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}