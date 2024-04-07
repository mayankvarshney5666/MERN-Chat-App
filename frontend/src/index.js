import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <ChatProvider>
        <App />
      </ChatProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();









// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { ChakraProvider } from '@chakra-ui/react'
// import { BrowserRouter } from 'react-router-dom'
// import ChatProvider from './Context/ChatProvider';

// const container = document.getElementById('root');
// createRoot(container).render(
//   <ChatProvider>
//     <BrowserRouter>
//       <ChakraProvider>
//         <App />
//       </ChakraProvider>
//     </BrowserRouter>
//   </ChatProvider>
// );






// // const root = createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode >,
// //   (document.getElementById('root'))
// // );