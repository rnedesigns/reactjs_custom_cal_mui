import React, { useState } from "react";
import { useEffect } from "react";
import useCalendar from "react-use-calendar";
// import "./fonts/font-awesome/css/font-awesome.min.css";

function CalendarTwo() {
    const [data, setData] = useState([]);

    const [state, actions] = useCalendar(null, {
        events: [
            {
                enteredAt: "10:30 AM",
                exitAt: "05:30 PM",
                startDate: new Date(2021, 11, 10),
                endDate: new Date(2021, 11, 10),
            },
            {
                enteredAt: "9:30 AM",
                exitAt: "04:30 PM",
                startDate: new Date(2021, 10, 9),
                endDate: new Date(2021, 10, 9)
            }
        ]
    });

    const getInfo = () => {
        fetch('./data.json', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
            .then(res => res.json)
            .then(setData)
    }

    useEffect(() => {
        getInfo()
    }, [])

    // console.log(actions.addEvent);
    return (
        <table className="container">
            <thead>
                <tr className="columns">
                    <td className="column is-four-fifths" style={ { textAlign: "left", paddingTop: "2em", marginTop: "1em" } }>
                        <strong>{ state.month } - { state.year }</strong>
                    </td>
                    <td style={ { textAlign: "center", flexGrow: "1", padding: "3em" } }>
                        <button onClick={ () => actions.getPrevMonth() }>&lt;</button>
                        <button onClick={ () => actions.getNextMonth() }>&gt;</button>
                    </td>
                </tr>
                <tr style={ { display: "flex" } }>
                    { state.days.map(day => (
                        <th key={ day } style={ { flexGrow: "1", padding: "3em", width: "200px", textAlign: "center" } }>{ day }</th>
                    )) }
                </tr>
            </thead>
            <tbody>
                { state.weeks.map((week, index) => (
                    <tr key={ index } style={ { display: "flex", flexWrap: "nowrap" } }>
                        { week.map(day => (
                            <td key={ day.dayOfMonth } style={ { textAlign: "center", backgroundColor: day.isToday ? "#8c939f" : "#525d72", flexGrow: "1", padding: "3em", border: ".1em solid #282c34", width: '200px' } }>
                                <b>{ day.dayOfMonth }</b>
                                <br />
                                {/* <br /><span style={ { fontSize: "12px" } }>Entered 10:30 am</span><br /><span style={ { fontSize: "12px" } }>Exit 3:30 pm</span> */ }
                                { data && data.length > 0 && data.map((e) => <span>{ e.enteredAt }</span>) }
                            </td>
                        )) }
                    </tr>
                )) }
            </tbody>
        </table >
    );
}

export default CalendarTwo;
