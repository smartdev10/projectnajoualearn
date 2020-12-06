import React , { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFormations } from "../../../store/actions/formations";

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
import Paginations from "../../partials/pagination";


const Formations = () => {
 
    const [currentPage , setCurrentPage] = useState(1)
    const formations = useSelector(state => state.formations)
    const dispatch = useDispatch()

    const totalDepart = 11
    useEffect(() => {
      dispatch(fetchFormations())
    }, [dispatch]);


  
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
                    
                  }}
                  >
                  <i className="fas fa-edit mr-2"></i>
                  Show Students
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
        <Container  className="mt--7" fluid>
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