import { render } from '@testing-library/react'
import Button from '../index'

describe('Atom - Button', () => {
  test('Should render correctly', () => {
    const { getByText } = render(<Button>Test Button</Button>)
    expect(getByText('Test Button')).toHaveTextContent('Test Button')
  })
})
