import React, { useState } from "react";
import EmployeeList from "./components/employeeList";
import Header from "./components/header";
import Navigation from "./components/nav";
import Layout from "./components/layout";
import employees from "./seed/seeder.json";

function App() {
  let [ searchTerm, setSearchTerm ] = useState("");
  let [ sorted, setSorted] = useState(false);
  let [ data, setEmployees] = useState(employees);

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value)
  };

  function handleSortByName() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
      setSorted(false);
    }
  };

  function handleSortByDept() {
    if (!sorted) {
      setEmployees(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
      setSorted(true);
    } else {
      setEmployees(data.sort((a, b) => (a.department > b.department) ? -1 : 1));
      setSorted(false);
    }
  };

  const filteredEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return (
        <div>
            <Header/>
            <Layout>
                <h1 className="title text-5xl text-gray-800 mt-16">Employee Directory</h1>
                <p className="mb-16 text-md">Search for an employee by Name or sort by Name or Category.</p>
                {/*the handleSearchTerm method and searchTerm state get passed down to the Navigation component via props with the onSearch and searchTerm props*/}
                <Navigation
                    onSearch={handleSearchTerm}
                    searchTerm={searchTerm}
                    handleSortByName={handleSortByName}
                    handleSortByDept={handleSortByDept}
                />
                {/* the employees array gets the filteredEmployees data via the data prop */}
                <EmployeeList data={filteredEmployees}/>
            </Layout>
        </div>
    )
}

export default App;