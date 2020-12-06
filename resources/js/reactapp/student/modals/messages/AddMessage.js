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
import { CreateAnnonces , fetchAnnonces } from "../../../store/actions/annonces";
import { fetchFormations  } from "../../../store/actions/formations";
import { Notyf } from 'notyf';
const notyf = new Notyf();
const AddAnnonce= ({  toggleAddModal , open  , currentPage , className }) => {
   
  const [name, setName] = useState("")
  const [description, setModuleDescription] = useState("")
  const [file, setFile] = useState(null)
  const [formation_id, setFormationId] = useState(0)
  const dispatch = useDispatch()
  const formations = useSelector(state => state.formations)

  useEffect(()=>{
   dispatch(fetchFormations())
  },[])

  
  const onChange = e => {
    const files = Array.from(e.target.files)
    if(files.length > 0){
      setFile(files[0])
    }
  
  }


  const save = () => {
    if(!file){
      notyf.error("Please Select a file")
   }else{
    const formdata = new FormData()
    formdata.append("name", name);
    formdata.append("file", file);
    formdata.append("description", description);
    formdata.append("formation_id", formation_id);
      dispatch(CreateAnnonces({data:formdata}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchAnnonces({
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
                <Input onChange={(e)=>  setName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Annonce Title" />
              </FormGroup>
             </ListGroupItem>

             <ListGroupItem>
              <FormGroup>
                <Label for="exampleSelect">Select Formation</Label>
                <Input placeholder="Select a formation" defaultValue="" onChange={(e)=> setFormationId(e.target.value) } type="select" name="formation_id" id="formation_id">
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

             <ListGroupItem>
              <FormGroup>
                <Label for="exampleFile">Attached_doc </Label>
                <Input onChange={onChange} type="file" name="attached_doc" id="exampleFile" />
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