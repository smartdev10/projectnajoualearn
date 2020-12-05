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
  FormText 
} from "reactstrap";

import { useDispatch , useSelector } from "react-redux";
import { CreateCourse , fetchCourses } from "../../../store/actions/courses";
import { fetchModules  } from "../../../store/actions/modules";
import { Notyf } from 'notyf';
const notyf = new Notyf();
const AddAnnonce= ({  toggleAddModal , open  , currentPage , className }) => {
   
  const [name, setModuleName] = useState("")
  const [description, setModuleDescription] = useState("")
  const [attached_doc, setAttachedDoc] = useState("file.pdf")
  const [formation_id, setFormationId] = useState(0)
  const dispatch = useDispatch()
  const modules = useSelector(state => state.modules)

  useEffect(()=>{
   dispatch(fetchModules())
  },[])

  const save = () => {
      dispatch(CreateCourse({data:{name,description,formation_id,attached_doc}}))
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
            Add Annonce
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
                <Label for="name"><strong>Annonce title :</strong> </Label>
                <Input onChange={(e)=>  setModuleName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Module Name" />
              </FormGroup>
             </ListGroupItem>

             <ListGroupItem>
              <FormGroup>
                <Label for="exampleSelect">Select Formation</Label>
                <Input defaultValue="" onChange={(e)=> setFormationId(e.target.value) } type="select" name="module_id" id="module_id">
                  <option value={""} key='erd'></option>
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

             <ListGroupItem>
              <FormGroup>
                <Label for="exampleFile">Attached_doc </Label>
                <Input onChange={() => setAttachedDoc("file.txt")} type="file" name="attached_doc" id="exampleFile" />
                <FormText color="muted">
                 Attached Doc
                </FormText>
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


export default AddAnnonce