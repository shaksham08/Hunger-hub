import React from "react";
import { createRoot } from "react-dom/client";

const Heading = () => <h1>Hello</h1>;

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<Heading />);
