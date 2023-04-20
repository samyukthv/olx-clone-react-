import React,{useEffect,useState,useContext} from 'react';


import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
function View() {
const [userDetails,setUserDetails]=useState()
const {postDetails}=useContext(PostContext)
const {firebase}=useContext(FirebaseContext)

useEffect(()=>{
  console.log(postDetails);
  const {urserId}= postDetails
  console.log(urserId +"    "+"kittttttttiiiiiiiiiiiiiiiiiii");
firebase.firestore().collection('users').where('id','==',urserId).get().then((res)=>{
  res.forEach(doc=>{
    setUserDetails(doc.data())
  })
})
},[])

console.log("10"-5);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createAt}</span>
        </div>
        {userDetails &&
      
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
}
      </div>
    </div>
  );
}
export default View;
