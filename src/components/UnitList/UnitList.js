import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import EditUnitModal from "../../components/EditUnitModal";

class UnitList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      unit: null
    };

    this.add = this.add.bind(this);
    this.edit = this.edit.bind(this);
    this.close = this.close.bind(this);
  }

  add() {
    this.setState(pre => ({
      ...pre,
      modalOpen: true,
      unit: null
    }));
  }

  edit(unit) {
    this.setState(pre => ({
      ...pre,
      modalOpen: true,
      unit
    }));
  }

  close() {
    this.setState(pre => ({
      ...pre,
      modalOpen: false,
      unit: null
    }));
  }

  render() {
    const { units } = this.props;
    const { modalOpen, unit } = this.state;
    const timeFormat = "YYYY/MM/DD hh:mm";

    return (
      <div>
        <Button onClick={this.add}>単位の作成</Button>
        <Table responsive>
          <thead>
            <tr>
              <td>ラベル</td>
              <td />
              <td>作成日時</td>
              <td>更新日時</td>
            </tr>
          </thead>
          <tbody>
            {units.map(ownUnit => (
              <tr key={ownUnit.id} onClick={() => this.edit(ownUnit)}>
                <td>{ownUnit.label}</td>
                <td>{ownUnit.step}</td>
                <td>{ownUnit.createdAt.format(timeFormat)}</td>
                <td>{ownUnit.updatedAt.format(timeFormat)}</td>
                <td />
              </tr>
            ))}
          </tbody>
        </Table>

        <EditUnitModal open={modalOpen} close={this.close} unit={unit} />
      </div>
    );
  }
}

export default UnitList;
