"use client";

import { useEffect } from "react";
import { forceRefreshIfTokenMissing } from "../apis/instance";
import { Header } from "../components/layouts/Header";
import { Provider } from "./Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
useEffect(() => {
  forceRefreshIfTokenMissing();
}, []);

return (
  <body>
    <Provider>
      <Header />
      {children}
      <ToastContainer />
    </Provider>
  </body>
);
}
