import React , { useEffect } from "react";
// reactstrap components
import {
  Button,
  Modal,
} from "reactstrap";

import { useDispatch} from "react-redux";
import { fetchCourses } from "../../../store/actions/courses";

const AddModule = ({  toggleAddModal , open , className }) => {
   
 
  const dispatch = useDispatch()
  // const formations = useSelector(state => state.courses)

  useEffect(()=>{
   dispatch(fetchCourses())
  },[])

 

  return (
    <>
      <Modal
        className={className}
        isOpen={open}
        fade={true}
        toggle={() => toggleAddModal(false)}>
        <div className="container modal-body">
      
        </div>
        <div className="modal-footer">
          <Button  onClick={()=> {} } color="primary" type="button">
           <i className="mr-2 fas fa-save"></i>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}


export default AddModule