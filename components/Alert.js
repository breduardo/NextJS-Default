import PropTypes from "prop-types";
import React from "react";
import { Col } from "react-bootstrap";

const Alert = (props) => {
  const { status, message, link, buttonText, newTab = "" } = props;

  return (
    <>
      {message && (
        <div
          style={{ borderTop: 0, borderRight: 0, borderBottom: 0 }}
          className={`alert alert-${status}`}
        >
          {message}
          {link && (
            <a
              href={link}
              className={`btn btn-sm btn-${status}`}
              target={`${newTab && "_blank"}`}
            >
              {buttonText || ""}
            </a>
          )}
        </div>
      )}
    </>
  );
};

// ButtonLoading.defaultProps = {
// onClick: () => null,
// };

Alert.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default React.memo(Alert);
