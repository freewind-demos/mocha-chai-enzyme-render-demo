"use strict";

import React from 'react';
import Hello from '../src/hello.jsx';
import chai from 'chai';
import {render} from 'enzyme';

chai.should();

describe('<Hello />', () => {

  it('renders whole html', () => {
    const wrapper = render(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.html().should.equal("<div><h1>Hello, I like:</h1><div>Box: AAA</div><div>Box: BBB</div></div>");
  });

});
