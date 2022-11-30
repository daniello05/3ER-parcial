const cargarPost=async()=>{
let url="https://jsonplaceholder.typicode.com/posts";
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    tabla=document.querySelector("#lista");
    data.map(item=>{
        tabla.innerHTML+=`
        <tr>
                  <th scope="row">${item.id}</th>
                  <td>${item.title}</td>
                  <td>${item.body}</td>
                  <td><button class="btn btn-warning btn-lg"><i class="bi bi-brightness-alt-high-fill" data-bs-toggle="modal" data-bs-target="#editModal" onclick="cargarPosts(${item.id})"></i> Editar </button> </td>
                  <td> <button class="btn btn-danger btn-lg"><i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#deleteModal"  onclick="eliminarPosts(${item.id})"></i> Eliminar </button></td>
               
                  
                  
        </tr>
              `;
    })
}
const cargarPosts=async(id)=>{    
    const api= await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    const respuesta=await api.json();
    console.log(respuesta);
    document.querySelector("#etitle").value=respuesta.title;
    document.querySelector("#ebody").value=respuesta.body;
    document.querySelector("#eid").value=respuesta.id;
    document.querySelector("#euserid").value=respuesta.userId;
}
const guardarPost=async()=>{
    let title=document.querySelector("#etitle").value;
    let body=document.querySelector("#ebody").value;
    let id=document.querySelector("#eid").value;
    let userid=document.querySelector("#euserid").value;

   const post={
title:title,
body:body,
id:id,
user:userid
}
    const api= await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
    method: 'PUT',
    body: JSON.stringify(post),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
},
}
)
const respuesta=api.json();
console.log(respuesta)
if(respuesta!=null){
    Swal.fire({
        title: 'buena esa chiquis !',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}else{
    Swal.fire(
        'Eres tonto?'
        
        )


}

}


const eliminarPost=(id)=>{
    document.querySelector("#deleteid").value=id;

}

const deletePost=async ()=>{
const id=document.querySelector("#deleteid").value;
const api=await fetch(`https://jsonplaceholder.typicode.com/posts/`+id,{
method:`DELETE`,

})
const respuesta=api.json();
console.log(respuesta)
if(respuesta!=null){
    Swal.fire(
        'sSEGUROOOO?',
        'TONTO',
        'no'
        )

}else{
    Swal.fire(
        'Eres tonto?',
        'That thing is still around?',
        'question'
        )


}



}

const addPost=async()=>{
    let titulo=document.querySelector("#titulo").value;
    let body=document.querySelector("#body").value;
    const post={
        title:titulo,
        body:body,
        userid:1
    };


    const api = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    
    
    });

const respuesta=await api.json();
tabla=document.querySelector("#lista");
tr=document.createElement("tr");
tr.innerHTML=`
                <th scope="row">${respuesta.id}</th>
                  <td>${respuesta.title}</td>
                  <td>${respuesta.body}</td>
                  <td><button class="btn btn-warning btn-lg"><i class="bi bi-brightness-alt-high-fill" data-bs-toggle="modal" data-bs-target="#editModal"></i> Editar </button> </td>
                  <td> <button class="btn btn-danger btn-lg"><i class="bi bi-trash3-fill" data-bs-toggle="modal" data-bs-target="#deleteModal"></i> Eliminar </button></td>
               
`
tabla.appendChild(tr);
if(respuesta!=null){
    Swal.fire(
        '*C GUARDA*',
        '',
        'question'
        )

}else{
    Swal.fire(
        '*NO C GUARDA*',
        '',
        'question'
        )


}
}
