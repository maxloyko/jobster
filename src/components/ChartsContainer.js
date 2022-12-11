import React, {useState} from 'react';
import {useSelector} from "react-redux";
import Wrapper from "../assets/wrappers/ChartsContainer";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";

const ChartsContainer = () => {
    const [barChart, setBarChart] = useState(true);
    const {monthlyApplications: chartData} = useSelector((store) => store.allJobs)

    return (
        <Wrapper>
            <h4>Monthly Applications</h4>
            <button type='button' onClick={() => setBarChart(!barChart)}>
                {barChart ? 'Area Chart' : 'Bar Chart'} (toggle)
            </button>
            {barChart ? <BarChart data={chartData} /> : <AreaChart data={chartData} />}
        </Wrapper>
    );
};

export default ChartsContainer;