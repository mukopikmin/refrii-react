import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Box from '../../models/box';

class EditBoxModal extends Component {
  constructor(props) {
    super(props);

    this.onNameChange = this.onNameChange.bind(this);
    this.onNoticeChange = this.onNoticeChange.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.remove = this.remove.bind(this);

    this.state = Box.mock().toJson();
  }

  onNameChange(e) {
    const name = e.target.value;

    this.setState({ name });
  }

  onNoticeChange(e) {
    const notice = e.target.value;

    this.setState({ notice });
  }

  onOpened() {
    const { box } = this.props;
    const params = box ? box.toJson() : Box.mock().toJson();

    this.setState(params);
  }

  create() {
    const { create, close } = this.props;

    create(this.state);
    close();
  }

  update() {
    const { update, close } = this.props;

    update(this.state);
    close();
  }

  remove() {
    const { remove, close } = this.props;

    remove(this.state);
    close();
  }

  renderTitle() {
    const { isEditBoxModalOpen } = this.props;

    return isEditBoxModalOpen ? 'カテゴリの編集' : 'カテゴリの追加';
  }

  renderActions() {
    const { box } = this.props;

    if (box) {
      return (
        <div>
          <Button color="primary" onClick={this.update}>更新</Button>
          <Button color="secondary" onClick={this.remove}>削除</Button>
        </div>
      );
    }

    return <Button color="primary" onClick={this.create}>追加</Button>;
  }

  render() {
    const { open, close } = this.props;
    const { name, notice } = this.state;

    return (
      <Modal show={open} onShow={this.onOpened} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>{this.renderTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>名前</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={this.onNameChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>メモ</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                value={notice}
                onChange={this.onNoticeChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.close}>
          キャンセル
          </Button>
          {this.renderActions()}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditBoxModal;
