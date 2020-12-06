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
import { UpdateModule , fetchModules } from "../../../store/actions/modules";
import { fetchDepartement } from "../../../store/actions/departements";

import { Notyf } from 'notyf';
const notyf = new Notyf();

const EditModule = ({ setMessage , toggleEditModal , open  , currentPage , className , depart }) => {
   
  const [name, setModuleName] = useState("")
  const [email, setEmail] = useState("")
  const [departement_id, setDepartementId] = useState(0)
  const departements = useSelector(state => state.departements)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDepartement())
    if(Object.keys(depart).length !== 0){
      setModuleName(depart.name)
      setEmail(depart.email)
      setDepartementId(depart.departement_id)
    }
  }, [depart])

  const saveModule = () => {
      dispatch(UpdateModule({data:{id:depart.id,name,email,departement_id}}))
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
            Edit teacher
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
                <Label for="name"><strong>Teacher Name :</strong> </Label>
                <Input value={name} onChange={(e)=>  setModuleName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
             </ListGroupItem>
             <ListGroupItem>
              <FormGroup>
                <Label for="email"><strong>teacher Email :</strong> </Label>
                <Input value={email} onChange={(e)=>  setEmail(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
             </ListGroupItem>
             <ListGroupItem>
              <FormGroup>
                <Label for="exampleSelect">Select Departement</Label>
                <Input value={departement_id} onChange={(e)=> setDepartementId(e.target.value) } type="select" name="departement_id" id="exampleSelect">
                  <option value={""} key='erd'></option>
                  {
                   departements ? departements.map((mod,i) => <option value={mod.id} key={i}>{mod.name}</option>) :  <option value={"loading..."} key='er'></option>
                  }
                </Input>
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