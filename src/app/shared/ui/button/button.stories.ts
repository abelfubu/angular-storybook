import { Story, Meta } from '@storybook/angular'
import { ButtonComponent } from './button.component'

export default {
  title: 'Example/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  template: `<afb-button>Click me!</afb-button>`,
  styles: [`padding: 2rem;`],
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: '#456547',
}
