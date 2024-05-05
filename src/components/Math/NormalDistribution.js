import * as d3 from "d3";
import { useState } from "react";

const mystyle = {
    background: 'aliceblue'
}

function gaussianRandom(mean = 0, stdev = 1) {
    const u = 1 - Math.random(); // Converting [0,1) to (0,1]
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

    // Transform to the desired mean and standard deviation:
    return z * stdev + parseFloat(mean);
}

export default function NormalDistribution() {
    const [normalResult, setNormalResult] = useState(0);
    const [inputs, setInputs] = useState({
        mean: 0,
        standardDeviation: 0
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setNormalResult(gaussianRandom(inputs.mean, inputs.standardDeviation));
    }
    const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));
    var width = 640
    var height = 400
    var marginTop = 20
    var marginRight = 20
    var marginBottom = 20
    var marginLeft = 20
    const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
    const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
    const line = d3.line((d, i) => x(i), y);
    function randn_bm() {
        let u = 0, v = 0;
        while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
        while (v === 0) v = Math.random();
        let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        num = num / 10.0 + 0.5; // Translate to 0 -> 1
        if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
        return num
    }
    // console.log(randn_bm());
    return (
        <div style={mystyle}>
            <p>Normal Distribution</p>
            {/* <svg width={1000} height={1000}> */}
            {/* <path fill="none" */}
            {/* <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} />
                <g fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
                    <path class="domain" stroke="currentColor" d="M0.5,6V0.5H880.5V6"></path>
                    <g class="tick" opacity="1" transform="translate(0.5,0)">
                        <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">0.0</text>
                    </g>
                    <g class="tick" opacity="1" transform="translate(176.5,0)">
                        <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">0.2</text>
                    </g>
                    <g class="tick" opacity="1" transform="translate(352.5,0)">
                        <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">0.4</text>
                    </g>
                    <g class="tick" opacity="1" transform="translate(528.5,0)">
                        <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">0.6</text>
                    </g>
                    <g class="tick" opacity="1" transform="translate(704.5,0)">
                        <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">0.8</text>
                    </g>
                    <g class="tick" opacity="1" transform="translate(880.5,0)">
                        <line stroke="currentColor" y2="6"></line>
                        <text fill="currentColor" y="9" dy="0.71em">1.0</text>
                    </g>
                </g> */}
            {/* </svg> */}
            {normalResult}
            <form onSubmit={handleSubmit}>
                <label>Mean:
                    <input
                        type="number"
                        name="mean"
                        value={inputs.mean}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>Standard Deviation:
                    <input
                        type="number"
                        name="standardDeviation"
                        value={inputs.standardDeviation}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </div>
    )
}