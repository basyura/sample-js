import React from "react";
// https://github.com/jpuri/react-range-slider
import { RangeSlider } from "reactrangeslider";
// https://date-fns.org/docs/Getting-Started
import { startOfToday, format, subDays, differenceInDays } from "date-fns";

class MySlider extends React.Component {
  constructor(props) {
    super(props);

    const defaultTerm = 30
    // min date
    this.minDate = new Date(2020, 0, 1);
    // max date
    this.endDate = startOfToday();
    // default start date
    this.startDate = subDays(this.endDate, defaultTerm);
    // days of all
    this.maxValue = differenceInDays(this.endDate, this.minDate);
    // default position
    this.state = { start: this.maxValue - defaultTerm, end: this.maxValue };
  }

  convertToDateStr = num => {
    let time = this.minDate.getTime() + num * 24 * 60 * 60 * 1000;
    let date = new Date();
    date.setTime(time);
    return format(date, "yyyy/MM/dd");
  };

  onChange = e => {
    if (e.start != null) {
      this.setState({ start: e.start });
    }
    if (e.end != null) {
      this.setState({ end: e.end });
    }
  };

  render() {
    return (
      <>
        <span>
          {this.convertToDateStr(this.state.start)} -{" "}
          {this.convertToDateStr(this.state.end)}
        </span>
        <RangeSlider
          min={0}
          max={this.maxValue}
          step={1}
          value={this.state}
          onChange={this.onChange}
        />
      </>
    );
  }
}

export default MySlider;
