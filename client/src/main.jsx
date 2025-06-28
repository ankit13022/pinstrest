import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./routes/homePage/Homepage";
import CreatePage from "./routes/createPage/CreatePage";
import PostPage from "./routes/postPage/PostPage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import SearchPage from "./routes/searchPage/SearchPage";
import AuthPage from "./routes/authPage/AuthPage";
import MainLayout from "./routes/layouts/mainLayouts";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/:username" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
