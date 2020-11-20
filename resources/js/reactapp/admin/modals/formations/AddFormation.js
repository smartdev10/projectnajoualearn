import React , { useState } from "react";
import { useDispatch } from "react-redux";
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

import { CreateFormation , fetchFormations } from "../../../store/actions/formations";
import { Notyf } from 'notyf';
const notyf = new Notyf();
const AddFormation = ({ setMessage , toggleAddModal , open  , currentPage , className }) => {
   
  const [name, setFormationName] = useState("")
  const [description, setModuleDescription] = useState("")
  const dispatch = useDispatch()


  const save = () => {
    if(description && name){
      dispatch(CreateFormation({data:{name, description}}))
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
    }else{
      notyf.error('Please fill All inforamtions');
    }
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
                <Label for="name"><strong>Formation Name :</strong> </Label>
                <Input onChange={(e)=>  setFormationName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
             </ListGroupItem>
             <ListGroupItem>
             <FormGroup>
                <Label for="Description">Description</Label>
                <Input onChange={(e)=>  setModuleDescription(e.target.value) } type="textarea" name="text" id="description" placeholder="Enter Module description" />
              </FormGroup>
             </ListGroupItem>
          </ListGroup>
        </div>
        <div className="modal-footer">
          <Button  onClick={()=> save() } color="primary" type="button">
           <i className="mr-2 fas fa-save"></i>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}


export default AddFormation