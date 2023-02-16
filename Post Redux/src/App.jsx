import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, delPost, putPost } from "./redux/postsSlice";

const initialState = {
  id: "",
  img: "",
  title: "",
  description: "",
};

function App() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const [isEdit, setIsEdit] = useState(false);

  const [formulario, setFormulario] = useState(initialState);

  const HandleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !isEdit ? dispatch(addPost(formulario)) : dispatch(putPost(formulario));

    cleanForm();
    setIsEdit(false);
  };

  const clickUpdate = (post) => {
    setIsEdit(true);
    setFormulario(post);
  };

  const cleanForm = () => {
    setFormulario(initialState);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Img</label>
                  <input
                    type="text"
                    name="img"
                    placeholder="Ingrese el link de una imagen"
                    value={formulario.img}
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                  />
                  <img src="" alt="" name="img" value={formulario.img} />
                </div>

                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Ingrese un titulo"
                    value={formulario.title}
                    className="form-control"
                    onChange={(e) => HandleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Ingrese una descripción"
                    className="form-control"
                    value={formulario.description}
                    onChange={(e) => HandleChange(e)}
                  />
                </div>
                <button className="btn btn-success">
                  {isEdit ? "Actualizar" : "Guardar"}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-7 mt-4 bg-white rounded-3">
          <table className="table bg-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">id</th>
                <th scope="col">img</th>
                <th scope="col">title</th>
                <th scope="col">description</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{post.id}</td>
                  <td>
                    {" "}
                    <img src={post.img} alt="kjjkjj" width={"200"} className="rounded-3" />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>
                    <div className="row justify-content-between">
                      <button
                        className="btn btn-danger mt-3 px-5 fw-bold"
                        onClick={() => dispatch(delPost(post.id))}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-primary mt-3 px-5 fw-bold"
                        onClick={() => clickUpdate(post)}
                      >
                        Actualizar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default App;
