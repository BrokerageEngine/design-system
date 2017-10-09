import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Divider, theme } from '..'

describe('Divider', () => {
  test('renders', () => {
    const json = renderer.create(<Divider />).toJSON()
    expect(json).toMatchSnapshot()
  })

  test('width prop sets width', () => {
    const json = renderer.create(<Divider width={1 / 2} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('width', '50%')
  })

  test('m prop sets margin', () => {
    const json = renderer.create(<Divider m={2} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('margin', theme.space[2] + 'px')
  })

  test('p prop sets padding', () => {
    const json = renderer.create(<Divider p={2} theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('padding', theme.space[2] + 'px')
  })

  test('borderColor prop sets borderColor', () => {
    const json = renderer.create(<Divider borderColor='blue' theme={theme} />).toJSON()
    expect(json).toMatchSnapshot()
    expect(json).toHaveStyleRule('border-color', theme.colors.blue)
  })
})
