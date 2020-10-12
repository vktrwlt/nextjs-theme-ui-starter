import { addDecorator } from '@storybook/react'
//**@jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../src/utils/theme/theme'

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
