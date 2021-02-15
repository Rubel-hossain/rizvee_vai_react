import React from "react";
import Header from "../components/header";
import Posts from "../components/posts";
export default function Home() {
  return (
    <>
      <div className="home-wrapper">
        <Header />
        <Posts />
      </div>
    </>
  );
}
