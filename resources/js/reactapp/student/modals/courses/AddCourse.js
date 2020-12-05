import React , { useEffect, useState } from "react";
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
import { CreateCourse , fetchCourses } from "../../../store/actions/courses";
import { fetchModules  } from "../../../store/actions/modules";
import { Notyf } from 'notyf';
const notyf = new Notyf();
const AddCourse = ({  toggleAddModal , open  , currentPage , className }) => {
   
  const [name, setModuleName] = useState("")
  const [description, setModuleDescription] = useState("")
  const [prerequisite, setPreReq] = useState("")
  const [difficulty_level, setDifficultyLevel] = useState("")
  const [module_id, setModuleId] = useState(0)
  const dispatch = useDispatch()
  const modules = useSelector(state => state.modules)

  useEffect(()=>{
   dispatch(fetchModules())
  },[])

  const save = () => {
      dispatch(CreateCourse({data:{name,description,prerequisite,difficulty_level,module_id,document_path:"file.pdf"}}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchCourses({
          pagination: { page : offset , perPage: offset + 10 },
          sort: { field: 'name' , order: 'ASC' },
          filter: {},
        }))
        toggleAddModal(false)
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
        toggle={() => toggleAddModal(false)}>

        <div className="modal-header">
          <h4 className="modal-title" id="modal-title-default">
            Add Course
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
                <Label for="name"><strong>Module Name :</strong> </Label>
                <Input onChange={(e)=>  setModuleName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Module Name" />
              </FormGroup>
             </ListGroupItem>

             <ListGroupItem>
              <FormGroup>
                <Label for="name"><strong>PreRequisites :</strong> </Label>
                <Input onChange={(e)=>  setPreReq(e.target.value) }  type="text" name="name" id="prereq" placeholder="Enter Module Pre Requisites" />
              </FormGroup>
             </ListGroupItem>


             <ListGroupItem>
              <FormGroup>
                <Label for="name"><strong>Difficulty Level :</strong> </Label>
                <Input onChange={(e)=>  setDifficultyLevel(e.target.value) }  type="text" name="diffculty_level" id="diffculty_level" placeholder="Enter Module Difficulty Level" />
              </FormGroup>
             </ListGroupItem>

             <ListGroupItem>
              <FormGroup>
                <Label for="exampleSelect">Select Module</Label>
                <Input defaultValue="" onChange={(e)=> setModuleId(e.target.value) } type="select" name="module_id" id="exampleSelect">
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


export default AddCourse