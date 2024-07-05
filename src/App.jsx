import React from "react";
import Navbar from "./Component/Navbar";
import Inbox from "./pages/Inbox";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import { Route, Routes } from "react-router-dom";
import MailDetails from "./pages/MailDetails";

const App = () => {
  return (
    <div className="min-h-full md:min-h-screen grid md:grid-cols-[20%,80%] w-full">
      <Navbar />
      <Routes>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/" element={<Inbox />} />
        <Route path="/details/:Id" element={<MailDetails />} />
        <Route path="/spam" element={<Spam />} />
        <Route path="/trash" element={<Trash />} />
        <Route path="*" element={<h1>Page-Not-Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
