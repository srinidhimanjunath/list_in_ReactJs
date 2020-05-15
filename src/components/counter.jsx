import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // tags: [],
  // };

  //   renderTags() {
  //     if (this.state.tags.length === 0)
  //       return <p>There are no tags to display</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   styles = {
  //     fontSize: 30,
  //     fontWeigth: "bold",
  //   };

  // handleEvent = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };
  render() {
    // console.log("props", this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <br />
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Click
        </button>
        <button
          className="btn btn-danger btn-sm m-3"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br />
        {/* {this.state.tags.length === 0 && "Please Create new tags"}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }
  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "secondary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h6>Zero</h6> : value;
  }
}

export default Counter;
