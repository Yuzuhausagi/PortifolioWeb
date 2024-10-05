import React from "react";
import JavaScriptIcon from "@/icons/javascript-logo-svgrepo-com.svg";
import PythonIcon from "@/icons/python-logo-only.svg";
import MongoDBIcon from "@/icons/mongodb-icon-1.svg";
import CSharpIcon from "@/icons/c#.svg";
import TypeScriptIcon from "@/icons/typescript.svg";
import NextJSIcon from "@/icons/nextjs-2.svg";
import ReactIcon from "@/icons/react-2.svg";
import APIIcon from "@/icons/api-svgrepo-com.svg";
import UnityIcon from "@/icons/unity-svgrepo-com.svg";
import HtmlIcon from "@/icons/html-1.svg";
import CssIcon from "@/icons/css-3.svg";
import CIcon from "@/icons/c.svg";
import CPlus from "@/icons/c-1.svg";
import CSharp from "@/icons/c#.svg";
import JavaIcon from "@/icons/java-4.svg";

export type Technology =
    "JavaScript"
    | "Python"
    | "MongoDB"
    | "C#"
    | "TypeScript"
    | "NextJS"
    | "React"
    | "API"
    | "Unity"
    | "HTML"
    | "CSS"
    | "C"
    | "C++"
    | "Java";

export const iconsByTechnologies = new Map<Technology, React.ElementType>();
iconsByTechnologies.set('JavaScript', JavaScriptIcon);
iconsByTechnologies.set('Python', PythonIcon);
iconsByTechnologies.set('MongoDB', MongoDBIcon);
iconsByTechnologies.set('C#', CSharpIcon);
iconsByTechnologies.set('TypeScript', TypeScriptIcon);
iconsByTechnologies.set('NextJS', NextJSIcon);
iconsByTechnologies.set('React', ReactIcon);
iconsByTechnologies.set('API', APIIcon);
iconsByTechnologies.set('Unity', UnityIcon);
iconsByTechnologies.set('HTML', HtmlIcon);
iconsByTechnologies.set('CSS', CssIcon);
iconsByTechnologies.set('C', CIcon);
iconsByTechnologies.set('C++', CPlus);
iconsByTechnologies.set('Java', JavaIcon);


