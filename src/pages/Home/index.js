import { useRef, useState } from 'react';
import { BsPlus } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../features/contact/contactSlice';


function HomePage() {
    const initialState = {
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
    }

    const [userData, setUserData] = useState(initialState);
    const { first_name, last_name, phone_number, email } = userData;
    const contacts = useSelector(state => state.contacts.data);
    const dispatch = useDispatch();
    const closeBtn = useRef();

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const addContactHandler = (e) => {
        e.preventDefault();
        dispatch(addContact({ first_name, last_name, phone_number, email }));
        setUserData(initialState);
        closeBtn.current.click();
    }

    return (
        <div className="col-sm p-3 min-vh-100">
            <h1>Home Page</h1>
            <hr />
            <div className="container mt-3">
                <h3>user contacts</h3>
                <button type="button" className="btn btn-primary d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#myModal">
                    <span className="btn-label"><BsPlus size={26} /></span>
                    New contact
                </button>

                <div className="modal" id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title">Add Contact</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" ref={closeBtn}></button>
                            </div>

                            <div className="modal-body">
                                <form onSubmit={addContactHandler}>
                                    <div className="mb-3">
                                        <label htmlFor="first_name" className="form-label">Firstname:</label>
                                        <input
                                            type="first_name"
                                            className="form-control"
                                            id="first_name"
                                            placeholder="Enter Firstname"
                                            name="first_name"
                                            value={userData.first_name}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="last_name" className="form-label">LastName:</label>
                                        <input
                                            type="last_name"
                                            className="form-control"
                                            id="last_name"
                                            placeholder="Enter LastName"
                                            name="last_name"
                                            value={userData.last_name}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="phone_number" className="form-label">Phone number:</label>
                                        <input
                                            type="phone_number"
                                            className="form-control"
                                            id="phone_number"
                                            placeholder="Enter Phone number"
                                            name="phone_number"
                                            value={userData.phone_number}
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            name="email"
                                            value={userData.email}
                                            onChange={handleChangeInput}
                                        />
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className=" btn btn-primary btn-block py-2">ADD</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Phone number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts?.length > 0 ?
                                contacts.map(contact => (<tr>
                                    <td>{contact.first_name}</td>
                                    <td>{contact.last_name}</td>
                                    <td>{contact.phone_number}</td>
                                    <td>{contact.email}</td>
                                </tr>))
                                :
                                <tr><td colSpan={4} className="p-2">No Contacts</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HomePage;
