import * as EulerDB from "../../../dist/esm";
import testData from "./testData.json";

// EulerDB.SimpleGraph.Hello("TEST");

let g = new EulerDB.SimpleGraph.Graph();
g.loadGraph(testData);

window.g = g;

document.getElementById("graph").innerText = JSON.stringify(g);
console.log("COOOOL");
