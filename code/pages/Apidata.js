import React from 'react';
import Userdata from './Userdata.json';
const Apidata=()=>{
    return(
        <div>
            <h1>This is the data component</h1>
            <table>
                <thread>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>Address</th>
                    </tr>
                </thread>
            </table>
            <tbody>
                {
                    Userdata.map((users,index)=>(
                        <tr key={index}>
                            <th>{index+1}</th>
                            <td>{users.Name}</td>
                            <td>{users.Email}</td>
                            <td>{users.Mobile}</td>
                            <td>{users.Address}</td>
                        </tr>
                    
                    ))
                }
            </tbody>
        </div>
        );
}
export default Apidata;