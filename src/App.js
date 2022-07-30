import {useState, useEffect} from 'react';
import './style.css';
import firebase from './firebaseConnection';
import { async } from '@firebase/util';

function App() {
  const [idPost, setIdPost] = useState('');
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts(){
      await firebase.firestore().collection('posts')
      .onSnapshot((doc)=>{
        let meusPosts = [];

        doc.forEach((item) => {
          meusPosts.push({
            id: item.id,
            titulo: item.data().titulo,
            autor: item.data().autor,
          })
        });

        setPosts(meusPosts);


      })
    }

    loadPosts();
  }, []);

  async function handleAdd () {
    await firebase.firestore().collection('posts')
    .add({
      titulo: titulo,
      autor: autor,
    })
    .then(()=>{
      console.log('teste')
      setTitulo('');
      setAutor('');
    })
    .catch((error) => {
      console.log('12e')
    })

  }

  async function buscaPost(){
    
    // await firebase.firestore().collection('posts')
    // .doc('h2Jqo4i7MlzsUZW6gNfn')
    // .get()
    // .then((snapshot) => {

    //   setTitulo(snapshot.data().titulo);
    //   setAutor(snapshot.data().autor);

    // })
    // .catch(() =>{
    //   console.log('Deu ruim')
    // })

    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista);

    })
    .catch(() => {
      console.log("deu ruim");
    })

  }

  async function editarPost (){
    await firebase.firestore().collection('posts')
    .doc(idPost)
    .update({
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log("Dados atualizados!");
      setIdPost('');
      setTitulo('');
      setAutor('');
    })
    .catch(() => {
      console.log('Erro ao atualizar');
    });
  }

  async function excluirPost(id){
    await firebase.firestore().collection('posts').doc(id)
    .delete()
    .then(() => {
      alert('Esse post foi excluido!');
    })
  }

  return (
    <div>
      <h1>React + Firebase =D AAA</h1><br/>

      <div className="container">

      <label>ID:</label>
      <input type="text" value={idPost} onChange={ (e) => setIdPost(e.target.value)} />

      <label>Titulo: </label>
        <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value) } />
        
        <label>Autor: </label>
        <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value) } />

        <button onClick={ handleAdd }>Cadastrar</button>
        <button onClick={ buscaPost }>Buscar Post</button> 
        <button onClick={ editarPost }>Editar Post</button> <br/>

        <ul>
          {posts.map((post) => {
             return(
              <li key={post.id} >
                <span>ID - {post.id} </span><br/>
                <span>Titulo: {post.titulo} </span><br/>
                <span>Autor: {post.autor} </span><br/>
                <button onClick={ () => excluirPost(post.id) }>Excluir Post</button><br/><br/>
              </li>
            )
          })}
        </ul>
        
      </div>

    </div>
  );
}

export default App;
