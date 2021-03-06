import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RoomView from './Components/Room/RoomView'
import RoomTool from './Components/Room/RoomTool'
import FurniViewer from './Components/Furni/FurniViewer'
import LandingView from './Components/LandingView/LandingView'
import ToolBar from './Components/ToolBar/ToolBar'
import ChatInput from './Components/Chat/ChatInput'
import Navigator from './Components/Navigator/Navigator'
import RoomCreator from './Components/Navigator/RoomCreator'
import Catalog from './Components/Catalog/Catalog'
import Splash from './Components/Splash/Splash'
import RoomEngine from './Shroom/RoomEngine'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RoomView />
    <FurniViewer />
    <LandingView />
    <ToolBar />
    <RoomTool />
    <ChatInput />
    <Navigator />
    <RoomCreator />
    <Catalog />
    <Splash />
  </React.StrictMode>,
  document.getElementById('root')
);

const Engine = new RoomEngine();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/*    <FurniViewer />
    <LandingView />
    <ToolBar />
    <RoomTool />
    <ChatInput />
    <Navigator />
    <RoomCreator />
    <Catalog />
    <Splash />*/

export default Engine

