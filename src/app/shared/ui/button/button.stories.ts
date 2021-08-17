import { Story, Meta } from '@storybook/angular'
import { TngButtonDirective } from '../directives/tng-button.directive'

export default {
  title: 'Example/Button',
  component: TngButtonDirective,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<TngButtonDirective> = (args: TngButtonDirective) => ({
  template: `<button tngButton>Click me!</button>`,
  styles: [`:host {padding: 2rem; display: block}`],
  props: args,
})

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: '#956548',
}
