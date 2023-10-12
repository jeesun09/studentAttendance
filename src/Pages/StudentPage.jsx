import React, { useState, useEffect } from 'react';

const initialStudentData = {
    "name": "dhoni",
    "id": "22002",
    "age": "22",
    "stream": "CSE",
    "year": "4",
    "phone": "9876543210",
    "dob": "01/01/2002",
    "email": "xyz@gmail.com",
    "address": "123, ABC, XYZ"
}

const StudentPage = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [studentData, setStudentData] = useState(initialStudentData);

    useEffect(() => {
        const storedData = localStorage.getItem('studentData');
        if (storedData) {
            setStudentData(JSON.parse(storedData));
        }
    }, []);

    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setStudentData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSaveClick = () => {
        localStorage.setItem('studentData', JSON.stringify(studentData));
        setIsEditMode(false);
    };

    return (
        <div>
            <div className='w-[30px]'>
                <img src="https://cdn.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.webp"/>
            </div>
            <div>
                
                {isEditMode ? (
                    <>
                        <input type="text" name="name" value={studentData.name} onChange={handleInputChange} />
                        <input type="text" name="id" value={studentData.id} onChange={handleInputChange} />
                        <input type="text" name="age" value={studentData.age} onChange={handleInputChange} />
                        <input type="text" name="stream" value={studentData.stream} onChange={handleInputChange} />
                        <input type="text" name="year" value={studentData.year} onChange={handleInputChange} />
                        <input type="text" name="phone" value={studentData.phone} onChange={handleInputChange} />
                        <input type="text" name="dob" value={studentData.dob} onChange={handleInputChange} />
                        <input type="text" name="email" value={studentData.email} onChange={handleInputChange} />
                        <input type="text" name="address" value={studentData.address} onChange={handleInputChange} />
                        <button onClick={handleSaveClick}>Save</button>
                    </>
                ) : (
                    <>
                        <h1>Name: {studentData.name}</h1>
                        <p>ID: {studentData.id}</p>
                        <p>Age: {studentData.age}</p>
                        <p>Stream: {studentData.stream}</p>
                        <p>Year: {studentData.year}</p>
                        <p>Phone No: {studentData.phone}</p>  
                        <p>DOB: {studentData.dob}</p> 
                        <p>Email: {studentData.email}</p> 
                        <p>Address: {studentData.address}</p>
                        <button onClick={handleEditClick}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default StudentPage;
