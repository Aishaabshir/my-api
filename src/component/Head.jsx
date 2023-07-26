import React from "react";
import axios from "axios";
import { useState } from "react";

function Head(){

     const [post,setpost]= useState([]);
     const Getallposts=()=>{
          axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
               setpost(response.data);
          })
     }
     return(
          <div>
               <button onClick={Getallposts}>Click_to_add_post</button>
               {
                    post.map((post,index)=>(
                         <div className="form">
                         <h1>{post.title}</h1>
                         <p> {post.body}</p>
     
     
                    </div>
                    ))
               }


          </div>

     )
}
export default Head

// return(
//      <div>
//           <button onClick={Getallphotos}>Add</button>
//           {
//                photo.map((photo,index)=>(
//                     <div className="form">
//                     <h1>{photo.title}</h1>
//                     <img src={photo.thumbnailUrl}></img>


//                </div>
//                ))
//           }


//      </div>

// )