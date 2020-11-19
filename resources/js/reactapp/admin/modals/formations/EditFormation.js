import React , { useState } from "react";
// reactstrap components
import {
  Button,
  Modal,
  Input,
  FormGroup,
  ListGroup,
  ListGroupItem,
  Label,
} from "reactstrap";

import { useDispatch } from "react-redux";
import { CreateFormation , fetchFormations } from "../../../store/actions/formations";
import { Notyf } from 'notyf';
const notyf = new Notyf();

const EditFormation = ({ setMessage , toggleAddModal , open  , currentPage , className }) => {
   
  const [name, setDepartementName] = useState("")
  const dispatch = useDispatch()

  const saveDepartement = () => {
      dispatch(CreateFormation({data:{name}}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchFormations({
          pagination: { page : offset , perPage: offset + 10 },
          sort: { field: 'name' , order: 'ASC' },
          filter: {},
        }))
        toggleAddModal(false)
        notyf.success('Your record have been successfully saved!');
      })
      .catch(()=> {
        setMessage("Data Saved")
        notyf.error('Error while Adding');
      })
  }

  return (
    <>
      <Modal
        className={className}
        isOpen={open}
        fade={true}
        toggle={() => toggleAddModal(false)}>

        <div className="modal-header">
          <h4 className="modal-title" id="modal-title-default">
            Add Formation
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleAddModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="container modal-body">
        <ListGroup>
            <ListGroupItem>
              <FormGroup>
                <Label for="name"><strong>Departement Name :</strong> </Label>
                <Input onChange={(e)=>  setDepartementName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
             </ListGroupItem>
          </ListGroup>
        </div>
        <div className="modal-footer">
          <Button  onClick={()=> saveDepartement() } color="primary" type="button">
           <i className="mr-2 fas fa-save"></i>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}


export default EditFormation