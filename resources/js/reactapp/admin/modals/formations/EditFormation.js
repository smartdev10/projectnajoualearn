import React , { useState , useEffect } from "react";
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
import { UpdateFormation , fetchFormations } from "../../../store/actions/formations";
import { Notyf } from 'notyf';
const notyf = new Notyf();

const EditFormation = ({ toggleEditModal , open  , currentPage , className , depart }) => {
   
  const [name, setFormationName] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const save= () => {
      dispatch(UpdateFormation({data:{id:depart.id ,name, description}}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchFormations({
          pagination: { page : offset , perPage: offset + 10 },
          sort: { field: 'name' , order: 'ASC' },
          filter: {},
        }))
        toggleEditModal(false)
        notyf.success('Your record have been successfully saved!');
      })
      .catch(()=> {
        notyf.error('Error while Adding');
      })
  }

  useEffect(() => {
    if(Object.keys(depart).length !== 0){
      setFormationName(depart.name)
      setDescription(depart.description)
    }
  }, [depart])

  return (
    <>
      <Modal
        className={className}
        isOpen={open}
        fade={true}
        toggle={() => toggleEditModal(false)}>

        <div className="modal-header">
          <h4 className="modal-title" id="modal-title-default">
            Add Formation
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleEditModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="container modal-body">
        <ListGroup>
            <ListGroupItem>
              <FormGroup>
                <Label for="name"><strong>Formation Name :</strong> </Label>
                <Input value={name} onChange={(e)=>  setFormationName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
             </ListGroupItem>
             <ListGroupItem>
              <FormGroup>
              <Label for="Description">Description</Label>
                <Input value={description} onChange={(e)=>  setDescription(e.target.value) } type="textarea" name="text" id="description" placeholder="Enter Module description" />
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


export default EditFormation