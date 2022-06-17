import React from "react";
import AddSection from "./AddSection";
import DisplaySection from "./DisplaySection";

export default function TodoApp() {
  return (
    <div className="w-50 m-auto">
      <AddSection />
      <DisplaySection />
    </div>
  );
}
