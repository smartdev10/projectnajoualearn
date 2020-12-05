import React , { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormations , DeleteFormation } from "../../../store/actions/formations";

// reactstrap components
import {
  Card,
  CardHeader,
  CardFooter,
  Table,
  Button,
  Container,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import AddFormation from "../../modals/formations/AddFormation";
import EditFormation from "../../modals/formations/EditFormation";
import Paginations from "../../partials/pagination";
import Confirm from "../../modals/Confirm";
// core components
import { Notyf } from 'notyf';
const notyf = new Notyf();

const Formations = () => {
 
    const [addModal, setToggleAddModal] = useState(false)
    const [editModal, setToggleEditModal] = useState(false)
    const [confirm, setConfirmModal] = useState(false)
    const [id, setId] = useState(null)
    const [currentPage , setCurrentPage] = useState(1)
    const [message, setMessage] = useState("Are you Sure ?!")
    const [depart, setDeprt] = useState({})
    const formations = useSelector(state => state.formations)
    const dispatch = useDispatch()

    const totalDepart = 11
    useEffect(() => {
      dispatch(fetchFormations())
    }, [dispatch]);


    const deleteAction = (id) => {
      const offset = (currentPage - 1) * 10;
      setMessage("Deleting ...")
      dispatch(DeleteFormation({id})).then(()=>{
        setMessage("Deleted")
        notyf.success('Your record have been successfully deleted!');
        dispatch(fetchFormations({
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
      dispatch(fetchFormations({
        pagination: { page : offset , perPage: 10 },
        sort: { field: 'name' , order: 'ASC' },
        filter: {},
      }))
      setCurrentPage(currentPage)
    }

    const renderFormations = () => {
      if(formations === null){
        return (
          <tr className="mb-0">
            <td className="text-center">
              <FontAwesomeIcon size='4x' className="mr-3" icon={faSyncAlt} spin /> 
            </td>    
          </tr>
         ) 
      }else if(formations.length === 0){
           <tr className="mb-0"> 
            <td className="">
              No data Available
            </td>    
          </tr>
      }else{
        return formations.map((dep) => {
          return (
            <tr  key={dep.id}>
               <th className="align-middle" scope="row">
                  <span className="mb-0 text-sm">
                   { dep.name}
                  </span>
               </th>
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
        {addModal &&  <AddFormation open={addModal} toggleAddModal={setToggleAddModal}/>}
        {editModal &&  <EditFormation depart={depart} open={editModal} toggleEditModal={setToggleEditModal}/>}
        {confirm &&  <Confirm message={message} id={id} confirm={confirm} confirmAction={deleteAction} toggleConfirmModal={setConfirmModal} />}
        <Container  className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="mr-3">
              <Button
                className="mb-3"
                type="button"
                onClick={() => {
                  setToggleAddModal(true) 
                }}>
                  <i className="mr-2 fas fa-plus"></i>
                 Add Formation
              </Button>
            </div>
          </Row>
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
                      <th scope="col">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                     {renderFormations()}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <Paginations currentPage={currentPage} pageLimit={10} pageNeighbours={1} onPageChanged={onPageChanged} totalRecords={totalDepart} />
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
        </Container>
      </>
    );
}


export default Formations