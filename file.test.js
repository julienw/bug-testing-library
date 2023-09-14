/**
  * @jest-environment jsdom
  */
import React from 'react'
import {render, screen} from '@testing-library/react'

test('reproduces the error', async () => {
  render(<a href="http://example.org">foo</a>);
  await screen.findByText('foo', {selector: '[href^=http:]'});
});
