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
import { UpdateCourse , fetchCourses } from "../../../store/actions/courses";
import { fetchModules } from "../../../store/actions/modules";

import { Notyf } from 'notyf';
const notyf = new Notyf();

const EditCourse = ({ toggleEditModal , open  , currentPage , className , depart }) => {
   
  const [name, setModuleName] = useState("")
  const [description, setModuleDescription] = useState("")
  const [module_id, setModuleId] = useState(0)
  const modules = useSelector(state => state.modules)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchModules())
    if(Object.keys(depart).length !== 0){
      setModuleName(depart.name)
      setModuleId(depart.formation_id)
      setModuleDescription(depart.description)
    }
  }, [depart])

  const save = () => {
      dispatch(UpdateCourse({data:{id:depart.id,name,description}}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchCourses({
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

  return (
    <>
      <Modal
        className={className}
        isOpen={open}
        fade={true}
        toggle={() => toggleEditModal(false)}>

        <div className="modal-header">
          <h4 className="modal-title" id="modal-title-default">
            Edit Course
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => toggleEditModal(false)}>

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
                <Label for="exampleSelect">Select Module</Label>
                <Input value={module_id} onChange={(e)=> setModuleId(e.target.value) } type="select" name="module_id" id="exampleSelect">
                  <option value={""} key='er'></option>
                  {
                   modules ? modules.map((mod,i) => <option value={mod.id} key={i}>{mod.name}</option>) :  <option value={"loading..."} key='er'></option>
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
          <Button  onClick={()=> save() } color="primary" type="button">
           <i className="mr-2 fas fa-save"></i>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}


export default EditCourse