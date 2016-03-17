import d3 from 'd3';
import React, { Component } from 'react';
import ReactDom from 'react-dom';


export default class HistoryChart extends Component {

  updateChart = () => {
    const el = ReactDom.findDOMNode(this);
    const dimensions = {
      w: this.props.width,
      h: this.props.height
    };
    draw(el, dimensions, this.props.data);
  }

  componentDidMount = () => {
    this.updateChart();
  }

  componentDidUpdate = () => {
    this.updateChart();
  }

  render() {
    return <svg className="historyChart" x={this.props.width} y="60">
    </svg>;
  }
}

const draw = (el, dimensions, dataset) => {
  console.log(dataset);
  //Width and height
  const w = dimensions.w;
  const h = dimensions.h;

  const xScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([0, w], 0.05);

  const yScale = d3.scale.linear()
    .domain([0, 9999])
    .range([0, h]);

  //Create SVG element
  const svg = d3.select(el)
    .attr('width', w)
    .attr('height', h);

  // Gradient
  const gradient = svg
    .append('linearGradient')
    .attr('y1', 0)
    .attr('y2', h)
    .attr('x1', '0')
    .attr('x2', '0')
    .attr('id', 'gradient')
    .attr('gradientUnits', 'userSpaceOnUse');

  gradient
    .append('stop')
    .attr('offset', '0')
    .attr('stop-color', '#f00');
  gradient
    .append('stop')
    .attr('offset', '1.5')
    .attr('stop-color', '#ff0');

  const bars = svg.selectAll('rect')
    .data(dataset, (d) => { return d.key; });

  //Create bars
  bars.enter()
    .append('rect')
    .attr('x', (d, i) => {
      return xScale(i);
    })
    .attr('y', (d) => {
      return h - yScale(d.value);
    })
    .attr('width', xScale.rangeBand())
    .attr('height', (d) => {
      return yScale(d.value);
    })
    .attr('fill', 'url(#gradient)');

  bars.transition()
    .duration(500)
    .attr('x', (d, i) => {
      return xScale(i);
    })
    .attr('y', (d) => {
      return h - yScale(d.value);
    })
    .attr('width', xScale.rangeBand())
    .attr('height', (d) => {
      return yScale(d.value);
    })
    .attr('fill', 'url(#gradient)');

  bars.exit()
    .transition()
    .duration(500)
    .attr('x', w + xScale.rangeBand())
    .remove();
};
