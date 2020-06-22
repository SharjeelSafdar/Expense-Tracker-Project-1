import React, { useContext } from 'react';
import './CalcStyle.css';
import { GlobalContext } from '../../Context/GlobalProvider';
import { CalcHead } from './CalcHead';
import { Screen } from './Screen';
import { Keypad } from './Keypad';

export const Calculator = () => {
    const { showCalculator } = useContext(GlobalContext);

    return (
        // Relevent CSS properties will be applied to the calculator
        // based on the 'showCaclculator' state value (true/false).
        <div className={`Calculator ${showCalculator ? 'show' : 'hide'}`}>
            <CalcHead />
            <Screen />
            <Keypad />
        </div>
    );
}
