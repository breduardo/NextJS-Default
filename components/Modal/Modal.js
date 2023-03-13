import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

import { ButtonLoading } from "components";
import { Button, Modal } from "react-bootstrap";
const ModalCustom = (props) => {
  const { onClick, name, closeModal, onSave, size, ...settings } = props;

  // console.log(React.findDOMNode("buttonLoading").modalBody.find())
  // console.log(ReactDOM.findDOMNode(<ButtonLoading/>))
  return (
    <Modal
      show={settings.visible}
      size={size}
      onHide={closeModal}
      style={{ overflowY: "initial !important" }}
    >
      <Modal.Header closeButton>
        {settings.modalTitle ? (
          <Modal.Title>{settings.modalTitle}</Modal.Title>
        ) : null}
      </Modal.Header>

      <Modal.Body style={{ overflowY: "auto" }}>
        {settings.modalBody}
        {settings.mensagemRetorno ? (
          <Col md={12} className="p-0 mt-3">
            {settings.mensagemRetorno.message && (
              <Alert
                status={settings.mensagemRetorno.type}
                message={settings.mensagemRetorno.message}
              />
            )}
          </Col>
        ) : null}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Fechar
        </Button>
        {/* {onSave && <CButton color="primary" onClick={onSave}>Salvar</CButton>} */}
        {settings?.modalFooter || null}
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(ModalCustom);
