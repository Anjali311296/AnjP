import axios from 'axios';
import { useEffect, useState } from 'react'

const Test = () => {
 const[Countries,setCountries]=useState([]);
const[Capitals,setCapitals]=useState([]);
const [count, setCount]= useState(0);
const [isDisabled, setIsDisabled]= useState(false);

useEffect(()=>{
  BindData();
},[])

const BindData=async()=>{
  try {
    const resp= await axios.get('http://localhost:5000/api/countries')
    setCountries(SuffleArr(resp.data))
    setCapitals(SuffleArr(resp.data))
    } catch (error) {
      
    }
  }
  const SuffleArr=(arr:[])=>{
    let newArr=[...arr]
    for(let i=newArr.length-1; i>0;i--){
    console.log(i)
    const j= Math.floor(Math.random()*(i+1));
    [newArr[i],newArr[j]]=[newArr[j],newArr[i]]
  }
  return newArr
}
  const handleCountries=(country:string)=>{
  console.log(country)
     setCountries((prev:any)=>(
      prev.map((item:any)=>({
        ...item,
        color:item.country===country? "primary":"",
        isCountry:item.country===country,
        isCapital:false
      }))
     ));
  }

  const handleCapitals=(capital:string)=>{
    const selectedCountry:any= Countries.find((item:any)=>item.isCountry);

    if(!selectedCountry){
      alert('No country selected for this capital')
      return;
    }
    const ismatched = selectedCountry.capital===capital;
    if(ismatched){
    setCapitals((prev:any)=>(
      prev.map((item:any)=>({
        ...item,
        color:item.capital===capital? "success":"",
      }))
    ));
    setCountries((prev:any)=>(
      prev.map((item:any)=>({
        ...item,
        color:item.country===selectedCountry.country?"success":"",
      }))
    ))
    setIsDisabled(true);
    setTimeout(()=>{
      setCapitals((prev)=>prev.filter((item:any)=>item.capital!==capital));
      setCountries((prev)=>prev.filter((list:any)=>list.country !==selectedCountry.country));
      setCount(count+1);
     setIsDisabled(false);
    },3000)
  }else{
    setCapitals((prev:any)=>(
      prev.map((item:any)=>({
        ...item,
        color:item.capital===capital ? "danger":""
      }))
    ));
    setCountries((prev:any)=>(
      prev.map((item:any)=>({
        ...item,
        color:item.country===selectedCountry.country?"danger":""
      }))
    ));
   }
  }


const matrix=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]


const rotate=(arr:any)=>{
  for(let i=0; i<arr.length;i++){
    for(let j=i; j<arr.length;j++){
      // console.log(arr[j])
      [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]]
      
    }
  }
  for(let item of arr){
    console.log(item)
    item.reverse()
  }
 
}
console.log(rotate(matrix))

const text ='apple banana apple orange banana'

const removeduplicated=(text:any)=>{
  const arr = text.split(" ");
  let uniquearr:any=[];
  console.log(arr);
  for(let i=0; i<arr.length;i++){
    if(!uniquearr.includes(arr[i])){
      uniquearr.push(arr[i])
    }

  }
  return uniquearr
}
console.log(removeduplicated(text).join(" "))

// const l= [...new Set(arr.split(' '))].join(' ')
// console.log(l)
 const string = "my is name is anjali"
 
 const findlargestString=(string2:string)=>{
  let largestString ='';
  let currentstringlngth=''

 for(let i=0;i<string2.length;i++){
  if(string2[i]!==" "){
   currentstringlngth+=string2[i]
  }else{
    currentstringlngth=''
  }
 
  if(currentstringlngth.length>largestString.length){
    largestString=currentstringlngth
  }
}
return largestString
 }
 console.log(findlargestString(string),"largets string")
  return (
   <>
  <h1 className="text-3xl font-bold text-primary mb-4">
    Welcome
  </h1>
  <div className={`row w-100`}>
    
    <div className="col-lg-6">
      <table className="border p-3 w-50">
        <thead className="table-light">
          <tr>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
          {Countries.map((item: any, index: number) => (
            <tr className={`bg-${item.color}`} key={index}>
              <td onClick={()=>handleCountries(item.country)}>{item.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="col-lg-6">
      <table className="border p-3 w-50">
        <thead className="table-light">
          <tr>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {Capitals.map((item: any, index: number) => (
            <tr className={`bg-${item.color} ${isDisabled ? "cursor-none":"cursor"}`} key={index}>
              <td className={`${isDisabled ? "cursor-none":"cursor"}`} onClick={()=>handleCapitals(item.capital)}>{item.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
<h1>{count}</h1>
  </div>
</>
  )
}

export default Test