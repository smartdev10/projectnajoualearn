import React , { useEffect , useState } from "react";
import { useSelector } from "react-redux";

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

import AddDepartement from "../../modals/departements/AddDepartement";
// core components


const Departements = () => {
 
    const [addModal, setToggleAddModal] = useState(false)
//  const banks = useSelector(state => state.banks)

    const renderDepartements = () => {
      return (
          <tr className="mb-0">
            <td className="">
            No data Available
            </td>    
          </tr>
      ) 
    };

    return (
      <>
        {/* Page content */}
        {addModal &&  <AddDepartement open={addModal} toggleAddModal={setToggleAddModal}/>}
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
                 Add Departement
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
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                     {renderDepartements()}
                  </tbody>
                </Table>
                <CardFooter className="py-4">
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
        </Container>
      </>
    );
}


export default Departements