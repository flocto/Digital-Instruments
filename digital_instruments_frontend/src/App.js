import React, {Component} from 'react';
import {NextUIProvider} from "@nextui-org/react";
import './App.css';
import Instrument from './Instrument';
import InstrumentCard from './InstrumentCard';
import VolumeGraph from './VolumeGraph';

class App extends Component {
  render() {

    return (
      <NextUIProvider>
        <VolumeGraph/>
        <Instrument/>
        <InstrumentCard name="Instrument Name" description="This is the description"/>
      </NextUIProvider>
    );
  }
}
export default App;