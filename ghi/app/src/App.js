import React from 'react';
import LocationForm from './LocationForm';
import AttendeesList from './AttendeesList';
import Nav from './Nav';
import ConferenceForm from './ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
    <Nav />
    <div className="container">
      <Routes>
        <Route path='conferences'>
          <Route path='new' element={<ConferenceForm/>}/>
        </Route>
        <Route path='attendees'>
          <Route index element={<AttendeesList attendees={props.attendees}/>}/>
          <Route path='new' element={<AttendConferenceForm/>}/>
        </Route>
        <Route path='locations'>
          <Route path='new' element={<LocationForm />}/>
        </Route>
        
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
