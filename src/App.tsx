import React from "react";
import { RecoilRoot } from "recoil";
import { MainLayout } from "./layout/MainLayout";

export default function App() {
  return (
    <div className="root">
      <RecoilRoot>
        <MainLayout></MainLayout>
      </RecoilRoot>
    </div>
  );
}
