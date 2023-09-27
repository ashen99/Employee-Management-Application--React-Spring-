import React, {useEffect, useState} from 'react';
import EmployeeService from "../../Services/EmployeeService";
import {Link} from "react-router-dom";
// import * as observable from "node/diagnostics_channel";

const TableView = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // EmployeeService.getAllEmployees().then((response)=> {
        //     setEmployees(response.data);
        //     console.log(response.data)
        // }).catch(error => {
        //     console.log(error)
        // })
        const fetchData= async () => {
            const response = await EmployeeService.getAllEmployees();
            console.log(response.data)
            setEmployees(response.data)
        }
        fetchData().catch(console.error)
    }, []);

    return (
        <div className="container">
            <h1 class="text-center">List Employees</h1>
            <Link to="/add-employee" className="btn btn-primary ">Add Employee</Link>
            <table className="table table-bordered table-striped" style={{marginTop:"30px"}}>
                    <thead>
                    <tr>
                        <th scope="col">Employee First Name</th>
                        <th scope="col">Employee Last Name</th>
                        <th scope="col">Employee Email</th>
                        <th scope="col">Employee Salary</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.salary}</td>
                                    <td style={{display: "flex", justifyContent: "space-evenly"}}>
                                        <button type="button" className="btn btn-primary">Update</button>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                    {/*<tr>*/}
                    {/*    <td>Ashen</td>*/}
                    {/*    <td>Perera</td>*/}
                    {/*    <td>ash@xxx.com</td>*/}
                    {/*    <td>5000</td>*/}
                    {/*    <td>*/}
                    {/*        <button type="button" class="btn btn-primary">Primary</button>*/}
                    {/*        <button type="button" className="btn btn-danger">Danger</button>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
        </div>
    );
};

export default TableView;