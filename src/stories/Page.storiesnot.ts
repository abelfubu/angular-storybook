import { CommonModule } from '@angular/common'
import { Meta, moduleMetadata, Story } from '@storybook/angular'
import { ButtonComponent } from 'src/app/shared/ui/button/button.component'
import Header from './header.component'
import * as HeaderStories from './Header.storiesno'
import Page from './page.component'

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, Header],
      imports: [CommonModule],
    }),
  ],
} as Meta

const Template: Story<Page> = (args: Page) => ({
  props: args,
})

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
}
