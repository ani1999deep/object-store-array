import React, { useState } from 'react'
import "./table.css"

const Table = () => {
    const[array,setArray]=useState([]);
    //Store object
    const[inputData,setInputData]=useState({name:" ",number:" "})
    //Index value
    const[index,setIndex]=useState();
    const [bolin,setBolin]=useState(false)
    let{name,number}=inputData;

//**************************************************************
const data=(e)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})

}

//*********************************************

//For button
const addinputdata=()=>{
    if(name==="" && number===""){
        alert("Enter Name and Roll no ")
    }
    else{
    setArray([...array,{name,number}])
    // console.log(inputdata)
    setInputData({name:"",number:""})
}


}
//*******************************
// console.log(array,"Total Array")



// Deleting the row
const deletedata=(i)=>{
 console.log(i,"this is index row")
 let total=[...array]
 total.splice(i,1);
 setArray(total)

}

//Updating the row
const updatedata=(i)=>{

    let{name,number}=array[i] //this is particular index  no row data send should be updated so get this index no row data in name or number

    setInputData({name,number});
    setBolin(true)
    setIndex(i)
}
//know add data at particular index means update it on that index 
const updateinfo=()=>{

    let total=[...array]
    total.splice(index,1,{name,number})
    setArray(total)
    setBolin(false)
    setInputData({name:" ",number:" "})
}

  return (
    <div>
        {/* For Name field */}
        <input type="text" value={inputData.name || ""} name='name' autoComplete='off' placeholder='Enter Name'  onChange={data}/>
        {/* For Number */}
        <input type="number" value={inputData.number ||""} name='number' placeholder='Enter Number' onChange={data}/>
        {/* Submit Button */}
        <button onClick={!bolin ?addinputdata : updateinfo}>{!bolin ? `Add data`:`Update data`}</button>

     
        <br/>
        
    <table border="1" width="100%">
        <tbody>
            <tr>
                <td>Name</td>
                <td>Number</td>
                <td>Update</td>
                <td>Delete</td>
            </tr>


{

    array && array.map(

        (item,i)=>{
            return(
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td><button  onClick={()=>updatedata(i)}>Update</button></td>
                    <td><button onClick={()=>deletedata(i)}>Delete</button></td>
                </tr>
            )
        }
    )
}











        </tbody>
    </table>
    </div>
  )
}

export default Table