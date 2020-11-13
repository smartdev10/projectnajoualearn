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
import { UpdateDepartement , fetchDepartement } from "../../../store/actions/departements";

const EditDepartement = ({ setMessage , toggleEditModal , open  , currentPage , className , depart }) => {
   
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const saveDepartement = () => {
      dispatch(UpdateDepartement({data:{name}}))
      .then(() => {
        const offset = (currentPage - 1) * 10;
        dispatch(fetchDepartement({
          pagination: { page : offset , perPage: offset + 10 },
          sort: { field: 'name' , order: 'ASC' },
          filter: {},
        }))
        toggleEditModal(false)
      })
      .catch(()=> {
        setMessage("Data Saved")
      })
  }
  useEffect(() => {
    if(Object.keys(depart).length !== 0){
      setName(depart.name)
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
            Edit Departement
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
                <Input value={name} onChange={(e)=>  setName(e.target.value) }  type="text" name="name" id="name" placeholder="Enter Departement Name" />
              </FormGroup>
             </ListGroupItem>
          </ListGroup>
        </div>
        <div className="modal-footer">
          <Button  onClick={()=> saveDepartement() } color="primary" type="button">
           <i className="mr-2 fas fa-save"></i>
            Edit
          </Button>
        </div>
      </Modal>
    </>
  );
}


export default EditDepartement