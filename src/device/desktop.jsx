// In desptop display the calculator and results component side by side
import React, { useState } from "react";
import Form from "../components/container/form/form";
import Results from "../components/presentational/results/results";
import "./desktop.scss";

export default function DesktopView() {
  const [formData, setFormData] = useState({});
  return (
    <div className="desktop-view">
      <Form device={"desktop"} type="text" isMobile={false} />
      <Results userInput={formData} device={"desktop"} />
    </div>
  );
}
