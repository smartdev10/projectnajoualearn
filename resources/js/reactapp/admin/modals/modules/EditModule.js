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
import { UpdateModule , fetchModules } from "../../../store/actions/modules";
import { Notyf } from 'notyf';
const notyf = new Notyf();

const EditModule = ({ setMessage , toggleEditModal , open  , currentPage , className , depart }) => {
   
  const [name, setModuleName] = useState("")
  const [description, setModuleDescription] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    if(Object.keys(depart).length !== 0){
      setModuleName(depart.name)
      setModuleDescription(depart.description)
    }
  }, [depart])

  const saveModule = () => {
      dispatch(UpdateModule({data:{id:depart.id,name,description}}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchModules({
          pagination: { page : offset , perPage: offset + 10 },
          sort: { field: 'name' , order: 'ASC' },
          filter: {},
        }))
        toggleEditModal(false)
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
        toggle={() => toggleEditModal(false)}>

        <div className="modal-header">
          <h4 className="modal-title" id="modal-title-default">
            Edit Module
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
                <Label for="name"><strong>Departement Name :</strong> </Label>
                <Input value={name} onChange={(e)=>  setModuleName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
              <FormGroup>
                <Label for="Description">Description</Label>
                <Input value={description} onChange={(e)=>  setModuleDescription(e.target.value) } type="textarea" name="text" id="description" placeholder="Enter Module description" />
              </FormGroup>
             </ListGroupItem>
          </ListGroup>
        </div>
        <div className="modal-footer">
          <Button  onClick={()=> saveModule() } color="primary" type="button">
           <i className="mr-2 fas fa-save"></i>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}


export default EditModule