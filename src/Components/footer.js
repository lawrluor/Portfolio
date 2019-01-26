import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Footer extends Component {
  render() {
    return (
      <Grid className="footerContainer social-links">
        <Cell col={6}>
          <h6>Built with React, Jan 2019</h6>
        </Cell>

        <Cell col={3}>
          <h6>luolawrence1@gmail.com</h6>
        </Cell>

        <Cell col={1}>
          <a href="https://linkedin.com/in/lawrenceluo8" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </Cell>

        <Cell col={1}>
          <a href="https://github.com/lawrluor" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </Cell>

        <Cell col={1}>
          <a href="https://www.instagram.com/oodles.of.lawrences" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>
        </Cell>
      </Grid>
    )
  }
}

export default Footer;
