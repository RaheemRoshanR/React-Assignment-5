import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Post from "../screens/Post";
import Comments from "../screens/Comments"
import Albums from "../screens/Albums"
import Photos from "../screens/Photos"
import Todos from "../screens/Todos"
import Users from "../screens/Users"

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <Link to="/Post">Post</Link>
          <Link to="/Comments">Comments</Link>
          <Link to="/Albums">Albums</Link>
          <Link to="/Photos">Photos</Link>
          <Link to="/Todos">Todos</Link>
          <Link to="/Users">Users</Link>
        </nav>
        <Routes>
          <Route path="Post" element={<Post />} />
          <Route path="Comments" element={<Comments />} />
          <Route path="Albums" element={<Albums />} />
          <Route path="Photos" element={<Photos />} />
          <Route path="Todos" element={<Todos />} />
          <Route path="Users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}