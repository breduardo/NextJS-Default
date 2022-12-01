import PropTypes from "prop-types";
import React from "react";
import { Button, Spinner } from "react-bootstrap";

const ButtonLoading = (props) => {
  const { onClick, name, loading, loadingText, ...settings } = props;

  return (
    <Button disabled={loading} onClick={onClick} {...settings}>
      {" "}
      {loading ? (
        <Spinner component="span" size="sm" aria-hidden="true" />
      ) : null}
      {"\u00A0"}
      {loading && loadingText}
      {!loading && settings.children}
    </Button>
  );
};

ButtonLoading.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
};

export default React.memo(ButtonLoading);
