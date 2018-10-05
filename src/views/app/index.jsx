import React from 'react';

import './reset';
import './style';

import Wrapper from '../../components/wrapper';
import Container from '../../components/container';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello UI!</h1>
        <h2>Hello</h2>
        <h3>Hello</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic
          voluptatem dolorem optio laboriosam minus ea commodi mollitia, ab
          reiciendis explicabo enim illo nulla? Ut iusto dicta voluptatibus
          reprehenderit facilis!
        </p>
        <a href="https://github.com/AllThingsSmitty/css-protips" />
        <p />
        <a href="https://github.com/AllThingsSmitty/css-protips">CSS Protips</a>
        <Wrapper>
          <Container>
            <h1>Hello UI!</h1>
            <h2>Hello</h2>
            <h3>Hello</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic
              voluptatem dolorem optio laboriosam minus ea commodi mollitia, ab
              reiciendis explicabo enim illo nulla? Ut iusto dicta voluptatibus
              reprehenderit facilis!
            </p>
            <a href="https://github.com/AllThingsSmitty/css-protips" />
            <p />
            <a href="https://github.com/AllThingsSmitty/css-protips">
              CSS Protips
            </a>
          </Container>
        </Wrapper>
        <Wrapper fullscreen>
          <h1>Hello UI!</h1>
          <h2>Hello</h2>
          <h3>Hello</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic
            voluptatem dolorem optio laboriosam minus ea commodi mollitia, ab
            reiciendis explicabo enim illo nulla? Ut iusto dicta voluptatibus
            reprehenderit facilis!
          </p>
          <a href="https://github.com/AllThingsSmitty/css-protips" />
          <p />
          <a href="https://github.com/AllThingsSmitty/css-protips">
            CSS Protips
          </a>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default App;
