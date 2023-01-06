import { db } from "../firebase";
import data from './Retrive';
import Sidebar from "../components/Sidebar";
import './dashboard.css';
import BootstrapTable from 'react-bootstrap-table-next';

// import "./datalist.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory ,{textFilter} from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { useEffect, useState } from "react";


const Dashboard = () => {
  const [finalData,setFinalData]=useState([]);


  useEffect(() => {
    setFinalData(data[0])
    },[]);
  const pagination =paginationFactory({
    page:1,
    sizePerPage:10,
    lastPageText:'>>',
    firstPageText:"<<",
    nextPageText:'>',
    prePageText:'<',
    showTotal:true,
    alwaysShowAllBtns:true,
    onPageChange:function(page,sizePerPage){
      console.log("page",page);
      console.log("sizePerPage",sizePerPage);
    },
    onSizePerPageChange:function(page,sizePerPage){
      
      console.log("page",page);
      console.log("sizePerPage",sizePerPage);
    },
  });




    return (
    <>
    <Sidebar/>
    <div className="container" >

    <h1>Dashboard</h1>
    <hr />
    <div className="btns">
      <button type="button" onClick={()=>{setFinalData(data[0])}} class="btn btn-primary">Today's</button>
      <button type="button" onClick={()=>{setFinalData(data[1])}} class="btn btn-info">Yeaterday's</button>
      <button type="button" class="btn btn-success">This Week</button>
      <button type="button" class="btn btn-danger">This Month</button>
      <button type="button" class="btn btn-warning">Overall</button>
    </div>
    <hr />
    <h3>Today's Late Comers</h3>

    <BootstrapTable className="table"
       bootstrap4
       keyField="rollno" 
       pagination={pagination}
       filter={filterFactory()}
       columns={columns} 
       data={finalData}/>
    </div>
    </>
    )
  };
  
  export default Dashboard;

  
const columns = [
  {
    dataField: "sno",
    text: "Sno",
  },
  {
    dataField: "Rollno",
    text: "Roll no",
    
    filter: textFilter()
  },
  {
    dataField: "Date",
    text: "Date",
    
    filter: textFilter(),
    
  },
  {
    dataField: "Time",
    text: "Time",
    filter: textFilter()
  }
];
const products=[
  {
    'rollno':'19N31A05N7',
    'year':'IV',
    'section':'D',
    'count':12
  },
  {
    'rollno':'19N31A05N7',
    'year':'IV',
    'section':'D',
    'count':12
  },
  {
    'rollno':'19N31A05M7',
    'year':'IV',
    'section':'D',
    'count':11
  },
  {
    'rollno':'19N31A05N7',
    'year':'IV',
    'section':'D',
    'count':10
  },
  {
    'rollno':'19N31A05N7',
    'year':'IV',
    'section':'D',
    'count':12
  },
  {
    'rollno':'19N31A05N7',
    'year':'IV',
    'section':'B',
    'count':9
  },
  {
    'rollno':'19N31A05M7',
    'year':'IV',
    'section':'A',
    'count':8
  },
  
]