import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';
import '../../setupTests.js';


it('Render banner test', async () => {
  render(<Header/>);

  // Check banner is present
  expect(screen.getByText("Zanzer's Dungeon")).toBeInTheDocument();

});
