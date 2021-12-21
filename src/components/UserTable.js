import React from 'react'
import Table from 'react-bootstrap/Table'
import './UserTable.css'

function userTable(props) {
    return (
        <div className='user-table'>
        <h1>Repositories</h1>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Repository Name</th>
                <th>Commits</th>
                </tr>
            </thead>
            <tbody>
                {props.tableRepos.map((tableRepo)=>(
                    <tr key={tableRepo.id}>
                    <td>{tableRepo.id}</td>
                    <td>{tableRepo.name}</td>
                    <td>{tableRepo.commitsUrl}</td>
                    </tr>
                ))}
            </tbody>
        </Table>  
        </div>
    )
}

export default userTable
