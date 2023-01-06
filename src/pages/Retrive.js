import { db } from '../firebase';
import { format } from 'date-fns';
import { collection, query, where, getDocs,orderBy } from "firebase/firestore";


const retrive_dates=()=>{
  const today = new Date()
  const yesterday = new Date(today)

  yesterday.setDate(yesterday.getDate() - 1)

  today.toDateString()
  yesterday.toDateString()
  let day1 = today.getDate();
  let month1 = today.getMonth() + 1;
  let year1 = today.getFullYear();

  let day2 = yesterday.getDate();
  let month2 = yesterday.getMonth() + 1;
  let year2= yesterday.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  if(month1<10){
    month1=`0${month1}`
  }
  if(month2<10){
    month2=`0${month2}`
  }
  if(day1<10){
    day1=`0${day1}`
  }
  if(day2<10){
    day2=`0${day2}`
  }
    currentDate = `${day1}/${month1}/${year1}`;
    Yeaterday_date=`${day2}/${month2}/${year2}`;
}


var data=[];
var today_=[];

var yesterday_=[];

const q = query(collection(db, "records"),orderBy("datetime"));

let currentDate
let Yeaterday_date
const querySnapshot =await getDocs(q);
  var no=1;
  retrive_dates()
  var temp;
querySnapshot.forEach((documentSnapshot) => {
  temp = {'sno':no,'Rollno':documentSnapshot.data().rollno,'Date':format(documentSnapshot.data().datetime.toDate(),'dd/MM/yyyy'),'Time':format(documentSnapshot.data().datetime.toDate(),'hh:mm a')};
  if(temp.Date===currentDate){

    today_.push(temp);
    no+=1;
  }
  else if(Yeaterday_date===temp.Date){
    yesterday_.push(temp);
    no+=1;
  }
  
});
data.push(today_)
data.push(yesterday_)
export default data;
// export default temp;
