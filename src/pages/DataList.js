import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { db } from "../firebase";
import { useState } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import {collection,query,getDocs} from "firebase/firestore"
import { async } from "@firebase/util";


import "./datalist.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory ,{textFilter} from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const columns = [
  {
    dataField: "rollno",
    text: "Roll No",
    filter: textFilter()
  },
  {
    dataField: "year",
    text: "Year",
    
    filter: textFilter()
  },
  {
    dataField: "section",
    text: "Section",
    
    filter: textFilter(),
    
  },
  {
    dataField: "count",
    text: "Count",
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
const DataList = () => {
  const [data_,setData_]=useState([]);

  useEffect(() => {
    // d();
    });


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
  const d=async ()=>{
    
    const q=query(collection(db,"records"));
    const querySnapshot= await getDocs(q);
    let data=querySnapshot.docs.map((doc)=>({
      ...doc.data(),
    }));

    data=data.sort(function(a, b){
      return b.section? 1 :-1;
    });
    Object.keys(data).map((id,index)=>{
      let temp1 = data.filter(d => d.rollno === data[id].rollno);
      data[id].count=temp1.length;
    });
    let a=data.filter((v,i,a)=>a.findIndex(v2=>(v2.rollno===v.rollno))===i)
    setData_(a);
    console.log(a)
  }
    return <div className="title">
      <Sidebar/>
       <div className="container" >
       <h1>DataList</h1>
       <br />
       <BootstrapTable className="table"
       bootstrap4
       keyField="rollno" 
       pagination={pagination}
       filter={filterFactory()}
       columns={columns} 
       data={data_}/>
       </div>
       </div>
  };
  

  export default DataList;