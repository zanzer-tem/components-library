import React from 'react';
import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';
import '../../setupTests';


it('Render banner test', async () => {
  render(<Footer/>);

  // Check banner is present
  expect(screen.getByText("Zanzer's Dungeon")).toBeInTheDocument();

});
