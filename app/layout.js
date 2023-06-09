"use client";

import axios from "axios";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    axios
      .get(`${process.env.SERVER}/user/get-user`, { withCredentials: true })
      .then((res) => {
        console.log(res.data.user.name);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body suppressHydrationWarning={true} className={inter.className}>
          <Header />
          {children}
          <ToastContainer />
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
