import React , { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages , DeleteMessage  } from "../../../store/actions/messages";

// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Button,
  Container,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import AddMessage from "../../modals/messages/AddMessage";
import ShowRoom from "../../modals/messages/ShowRoom";

// core components
import { Notyf } from 'notyf';
const notyf = new Notyf();

const Messages = () => {
 
    const [addModal, setToggleAddModal] = useState(false)
    const [editModal, setToggleEditModal] = useState(false)
    const [depart, setDeprt] = useState({})
    const annonces = useSelector(state => state.annonces)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchMessages())
    }, [dispatch]);

    const deleteAction = (id) => {
      dispatch(DeleteMessage({id})).then(()=>{
        dispatch(fetchMessages()).then(()=>{
        })
      }).catch(()=>{
        notyf.error('Error while Deleting');
      })
    }

    const render = () => {
      if(annonces === null){
        return (
          <tr className="mb-0">
            <td className="text-center">
              <FontAwesomeIcon size='4x' className="mr-3" icon={faSyncAlt} spin /> 
            </td>    
          </tr>
         ) 
      }else if(annonces.length === 0){
           <tr className="mb-0"> 
            <td className="">
              No data Available
            </td>    
          </tr>
      }else{
        return annonces.map((dep) => {
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
                  Show Messages
                  </Button>
                </div>
                <div className="ml-2">
                  <Button
                  type="button"
                  color="danger"
                  onClick={() =>  {
                    deleteAction(dep.id)
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
        {addModal &&  <AddMessage open={addModal} toggleAddModal={setToggleAddModal}/>}
        {editModal &&  <ShowRoom depart={depart} open={editModal} toggleEditModal={setToggleEditModal}/>}
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
                 Compose
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
                     {render()}
                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
        </Container>
      </>
    );
}


export default Messages