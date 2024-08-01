import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { WithRemote } from "./with-remote";

export function RouteTest() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" index element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Home />} />
        <Route path="/with-remote" element={<WithRemote />} />
      </Routes>
    </BrowserRouter>
  );
}
