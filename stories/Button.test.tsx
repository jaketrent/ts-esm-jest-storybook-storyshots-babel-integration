import { render } from '@testing-library/react'
import * as React from 'react'

import { Button } from './Button'

it('renders', () => {
  render(<Button label="Jake" />)
})
