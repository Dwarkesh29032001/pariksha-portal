import React, { useState } from 'react';
import axios from 'axios';
<<<<<<< HEAD
//import { useNavigate } from 'react-router-dom';
import '../../Style/StyleCreateExam.css'
=======
import { useNavigate } from 'react-router-dom';
import '../../Style/AdminPagesStyle/StyleCreateExam.css'
>>>>>>> 4a853a1a2477d07742ac85760a9922e1ce3bfccd
const CreateExamForm = () => {
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState('');
  const [examDuration, setExamDuration] = useState('');
  //const [questions, setQuestions] = useState('');
  const [examId, setExamId] = useState('');
  // const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCreateExam = async (e) => {
    e.preventDefault();
    try {
      const examId = Math.random().toString(36).substring(2, 10);
      setExamId(examId);

      // const timestamp = new Date(examDate).getTime();

<<<<<<< HEAD
      const response = await axios.post('http://localhost:8080/api/createExam', {
        examId,
        examName,
        examDate,
        examDuration
=======
      const response = await axios.post('/api/exams', {
        id: generatedID,
        name: examName,
        date: timestamp,
        duration:examDuration,
        questions:questions,
>>>>>>> 4a853a1a2477d07742ac85760a9922e1ce3bfccd
      });
      // console.log(response.data);
      console.log(response.data);
      setSuccessMessage(`Data of ${examName} added successfully!`);
      setErrorMessage('');

      const examLink = `/exam/${examId}`;
      console.log('Exam Link:', examLink);
<<<<<<< HEAD

      //  navigate(examLink);
    } catch (e) {
      console.log(e);
      setSuccessMessage('');
      setErrorMessage('Error adding Exam, Please try again.');
      // console.error('Error creating exam:', error);
=======
    } catch (error) {
      console.error('Error creating exam:', error);
>>>>>>> 4a853a1a2477d07742ac85760a9922e1ce3bfccd
    }
  };







  return (
    <div>
      <div className='AddStuTitle'>Create New Exam:</div>
<<<<<<< HEAD
      {successMessage && <div className="successMessage">{successMessage}</div>}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      <form className='FormCreateExam'>
=======
      <form className='FormCreateExam' onSubmit={handleCreateExam}>
>>>>>>> 4a853a1a2477d07742ac85760a9922e1ce3bfccd
        <label>Exam Name:</label>
        <input type="text" value={examName} onChange={(e) => setExamName(e.target.value)} required/>

        <label>Exam Date:</label>
        <input type="date" value={examDate} onChange={(e) => setExamDate(e.target.value)} required/>

        <label>Exam Duration (minutes):</label>
        <input type="number" value={examDuration} onChange={(e) => setExamDuration(e.target.value)} required />

<<<<<<< HEAD
        {/* <label>Questions:</label>
        <textarea value={questions} onChange={(e) => setQuestions(e.target.value)} /> */}

        <div>
          <button type="button" onClick={handleCreateExam}  >Create Exam</button>
          {/* <button type="button" >Add Questions</button> */}
        </div>




      </form>

      <p>Generated Exam ID: {examId}</p>
=======
        <label>Questions:</label>
      <input type="file" required className='file'></input>
      <br></br>
        <button className='buttonForPaper'>Create Exam</button>
      </form>
      <p>Generated Exam ID: {uniqueID}</p>
>>>>>>> 4a853a1a2477d07742ac85760a9922e1ce3bfccd
    </div>
  );
};

export default CreateExamForm;
