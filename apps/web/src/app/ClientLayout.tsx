"use client";

import { useEffect } from "react";
import { forceRefreshIfTokenMissing } from "../apis/instance";
import { Header } from "../components/layouts/Header";
import { Provider } from "./Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleAnalytics from './GoogleAnalytics';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
useEffect(() => {
  forceRefreshIfTokenMissing();
}, []);

return (
  <div>
    <Provider>
      <Header />
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
      {children}
      <ToastContainer />
    </Provider>
  </div>
);
}
