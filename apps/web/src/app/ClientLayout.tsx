"use client";

import { useEffect } from "react";
import { forceRefreshIfTokenMissing } from "../apis/instance";
import { Header } from "../components/layouts/Header";
import { Provider } from "./Provider";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    forceRefreshIfTokenMissing();
  }, []);

  return (
    <body>
      <Provider>
        <Header />
        {children}
      </Provider>
    </body>
  );
}
