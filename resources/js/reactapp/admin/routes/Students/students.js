import React , { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents , DeleteStudent , UpdateStudent } from "../../../store/actions/students";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Table,
  Button,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import AddStudent from "../../modals/students/AddStudent";
import EditStudent from "../../modals/students/EditStudent";
import Paginations from "../../partials/pagination";
import Confirm from "../../modals/Confirm";
// core components
import { Notyf } from 'notyf';
const notyf = new Notyf();

const Students = () => {
 
    const [addModal, setToggleAddModal] = useState(false)
    const [editModal, setToggleEditModal] = useState(false)
    const [confirm, setConfirmModal] = useState(false)
    const [id, setId] = useState(null)
    const [currentPage , setCurrentPage] = useState(1)
    const [message, setMessage] = useState("Are you Sure ?!")
    const [depart, setDeprt] = useState({})
    const students = useSelector(state => state.students)
    const dispatch = useDispatch()

    const totalDepart = 11
    useEffect(() => {
      dispatch(fetchStudents())
    }, [dispatch]);


    const deleteAction = (id) => {
      const offset = (currentPage - 1) * 10;
      setMessage("Deleting ...")
      dispatch(DeleteStudent({id})).then(()=>{
        setMessage("Deleted")
        notyf.success('Your record have been successfully deleted!');
        dispatch(fetchStudents({
          pagination: { page : offset , perPage: offset + 10 },
          sort: { field: 'name' , order: 'ASC' },
          filter: {},
        })).then(()=>{
          setConfirmModal(false)
          setMessage("Are you Sure ?!")
        })
      }).catch(()=>{
        notyf.error('Error while Deleting');
        setMessage("Error While Deleting!")
      })
    }
  
    const onPageChanged = (page , totalPages)=>{
      const currentPage = Math.max(0, Math.min(page, totalPages));
  
      const offset = (currentPage - 1) * 10;
      dispatch(fetchStudents({
        pagination: { page : offset , perPage: 10 },
        sort: { field: 'name' , order: 'ASC' },
        filter: {},
      }))
      setCurrentPage(currentPage)
    }

    const render = () => {
      if(students === null){
        return (
          <tr className="mb-0">
            <td className="text-center">
              <FontAwesomeIcon size='4x' className="mr-3" icon={faSyncAlt} spin /> 
            </td>    
          </tr>
         ) 
      }else if(students.length === 0){
           <tr className="mb-0"> 
            <td className="">
              No data Available
            </td>    
          </tr>
      }else{
        return students.map((dep) => {
          return (
            <tr  key={dep.id}>
               <th className="align-middle" scope="row">
                  <span className="mb-0 text-sm">
                   { dep.name}
                  </span>
               </th>
               <td>
              <BootstrapSwitchButton
                checked={dep.active}
                onlabel='Active'
                onstyle='success'
                offlabel='Inactive'
                offstyle='info'
                size="sm"
                width={150}
                onChange={(checked) => {
                  dispatch(UpdateStudent({data:{id:dep.id,active:checked}}))
                  .then(() => {
                    const offset = (currentPage - 1) * 10;
                    dispatch(fetchStudents({
                      pagination: { page : offset , perPage: offset + 10 },
                      sort: { field: 'name' , order: 'ASC' },
                      filter: {},
                    }))
                    notyf.success('Your record have been successfully saved!');
                  })
                  .catch(()=> {
                    setMessage("Data Saved")
                    notyf.error('Error while Adding');
                  })
              }}/>
              </td>
            <td className="align-middle">
              <div className="d-flex align-items-center">
                <div className="ml-2">
                  <Button
                  type="button"
                  color="primary"
                  onClick={() =>  {
                    setDeprt(dep)
                    setToggleEditModal(true) 
                  }}
                  >
                  <i className="fas fa-edit mr-2"></i>
                  edit
                  </Button>
                </div>
                <div className="ml-2">
                  <Button
                  type="button"
                  color="danger"
                  onClick={() =>  {
                    setId(dep.id)
                    setConfirmModal(c => !c )
                  }}
                  >
                  <i className="fas fa-trash-alt mr-2"></i>
                  delete
                  </Button>
                </div>
              </div>
            </td>
            </tr>
          );
        });
      }
    };

    return (
      <>
        {/* Page content */}
        {addModal &&  <AddStudent open={addModal} toggleAddModal={setToggleAddModal}/>}
        {editModal &&  <EditStudent depart={depart} open={editModal} toggleEditModal={setToggleEditModal}/>}
        {confirm &&  <Confirm message={message} id={id} confirm={confirm} confirmAction={deleteAction} toggleConfirmModal={setConfirmModal} />}
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="d-flex justify-content-start border-0">
                  <h3 className="mb-0">
                   
                  </h3>
                </CardHeader>
                <Table  responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">name</th>
                      <th scope="col">change status</th>
                      <th scope="col">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                     {render()}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <Paginations currentPage={currentPage} pageLimit={10} pageNeighbours={1} onPageChanged={onPageChanged} totalRecords={totalDepart} />
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
      </>
    );
}


export default Students