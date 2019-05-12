import React from 'react'
import './TheyOweTotal.css';

export default function TheyOweTotal() {
  return (
    <div>
        <div className="box">
            {/* div gjorde design enkelt, ikke tenk på p */}
            <div className="theyOwe">They owe</div>
            <div className="totalText">Total</div>
            <div className="totalNumbers">{totalValue}</div>
        </div>
    </div>
  )
}

const textStyle = {

}

const boxStyle = {
    width: '500px',
    height: '100px',
    float: 'left', // Vurder, padding ble wierd med denne pA
    margin: '26px',
    background: '#49CF64',
    color: '#FFFFFF',
    fontSize: '20px',
}

const totalValue = '2800kr';

