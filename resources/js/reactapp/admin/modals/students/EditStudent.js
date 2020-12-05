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

import { useDispatch , useSelector } from "react-redux";
import { fetchFormations } from "../../../store/actions/formations";
import { fetchStudents , UpdateStudent } from "../../../store/actions/students";

import { Notyf } from 'notyf';
const notyf = new Notyf();

const EditStudent = ({ setMessage , toggleEditModal , open  , currentPage , className , depart }) => {
   
  const [name, setModuleName] = useState("")
  const [description, setModuleDescription] = useState("")
  const [formation_id, setFormationId] = useState(0)
  const formations = useSelector(state => state.formations)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFormations())
    if(Object.keys(depart).length !== 0){
      setModuleName(depart.name)
      setFormationId(depart.formation_id)
      setModuleDescription(depart.description)
    }
  }, [depart])

  const saveModule = () => {
      dispatch(UpdateStudent({data:{id:depart.id,name,description,formation_id}}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchStudents({
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
            Edit Student
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
                <Label for="name"><strong>Module Name :</strong> </Label>
                <Input value={name} onChange={(e)=>  setModuleName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
             </ListGroupItem>
         
             <ListGroupItem>
              <FormGroup>
                <Label for="exampleSelect">Select Formation</Label>
                <Input value={formation_id} onChange={(e)=> setFormationId(e.target.value) } type="select" name="module_id" id="exampleSelect">
                  <option value={""} key='erd'></option>
                  {
                  formations ? formations.map((mod,i) => <option value={mod.id} key={i}>{mod.name}</option>) :  <option value={"loading..."} key='er'></option>
                  }
                </Input>
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
          <Button  onClick={()=> saveModule() } color="primary" type="button">
           <i className="mr-2 fas fa-save"></i>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}


export default EditStudent