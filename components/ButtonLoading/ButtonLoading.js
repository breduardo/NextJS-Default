import PropTypes from "prop-types";
import React from "react";
import { Button, Spinner } from "react-bootstrap";

const ButtonLoading = (props) => {
  const { onClick, name, loading, ...settings } = props;

  return (
    <Button disabled={loading} onClick={onClick} {...settings}>
      {" "}
      {loading ? (
        <Spinner component="span" size="sm" aria-hidden="true" />
      ) : null}
      {"\u00A0"}
      {settings.children}
    </Button>
  );
};

export default React.memo(ButtonLoading);
