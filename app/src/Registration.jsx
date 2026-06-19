import React, { use, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Registration() {

    const [fname , setFname] = useState('')
    const [lname , setLname] = useState('')
    const [email , setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [city , setCity] = useState('')
    const [gender , setGender] = useState('')

    const [users , setUser] = useState([])

    const HandleClickSubmit = () => {
        //console.log(fname,lname,email,mobile,city,gender)


        if(fname.trim() === '')
        {
            alert('Please Enter First Name!')
            return
        }
        if(lname.trim() === '')
        {
            alert('Please Enter Last Name!')
            return
        }
        if(email.trim() === '')
        {
            alert('Please Enter Email !')
            return
        }
        if(mobile.trim() === '')
        {
            alert('Please Enter Mobile!')
            return
        }
        if(city.trim() === '')
        {
            alert('Please Enter City!')
            return
        }
        if(gender === '')
        {
            alert('Please Select Gender!')
        }

        const user = {
            fname,
            lname,
            email,
            mobile,
            city,
            gender

        }

        setUser([...users,user])

        //clear the form 
        setFname('')
        setLname('')
        setEmail('')
        setMobile('')
        setCity('')
        setGender('')
        //when you want to clear the form -> you need to compulsory to write value attaribute in the form 
        //value = {fname} -> like this and for radio button ->use  checked={gender === 'Male'}

    }

  return (<>
    <div className="container mt-3 ">
        <h2>Registration Form</h2>
        <div className="row">
            
         <div className="col md-3">

            <div>
                    <label htmlFor="Fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter First Name" id="Fname" value={fname} required onChange={e => setFname(e.target.value)}/>
            </div>
            <div>
                    <label htmlFor="Lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter Last Name" id="Lname" value={lname} required onChange={e => setLname(e.target.value)}/>
            </div>
            <div>
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter Email" id="Email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                    <label htmlFor="mob" className="form-label">Mobile No</label>
                    <input type="number" className="form-control" placeholder="Enter Mobile No" id="mob" value={mobile} onChange={e => setMobile(e.target.value)}/>
            </div>
            <div>
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" className="form-control" placeholder="Enter City" id="city" value={city} onChange={e => setCity(e.target.value)}/>
            </div>
            <div>
                <label className="form-label">Gender</label>
                 {/* <div className="form-check form-check-inline" >  on single line */}
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="male" value={"Male"} checked={gender === 'Male'} onChange={e => setGender(e.target.value)}/>
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="gender" id="female" value={"Female"} checked={gender === 'Female'} onChange={e => setGender(e.target.value)}/>
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
            </div>
            <div className="mt-3">
                <button type="button" className="btn btn-success" onClick={HandleClickSubmit}>Submit</button>
            </div>
          </div>

        {/* right hand side part */}
        <div className="col md-9">
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Gender</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //index is written because of key prop error
                            users.map((user) => {
                                return (<tr> 
                                   <td>{user.fname}</td>
                                    <td>{user.lname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.city}</td>
                                    <td>{user.gender}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>
 </> )
}
