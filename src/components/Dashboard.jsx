import { Link, Navigate, useOutlet } from "react-router-dom";

import { AppBar } from "./AppBar";
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar"

export const Dashboard = () => {
  return (
    <div id="" className="">
      <Sidebar />
      <main id="main-content" className="content">
        <AlbumList></AlbumList>
      </main>
    </div>
  );
};
