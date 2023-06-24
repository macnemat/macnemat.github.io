import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

function ModalProjectMammoth() {
  return (
    <Modal dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src="https://raw.githubusercontent.com/macnemat/macnemat.github.io/main/MatthewPortfolio/src/assets/ProjectMammoth_Logo.png" />
        Woohoo, you are reading this text in a modal!

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}