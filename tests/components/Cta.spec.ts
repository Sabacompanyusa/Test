import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Cta from '../../components/Cta.vue'

const factory = (props?: any) => {
  return mount(Cta, {
    props,
    global: {
      stubs: {
        NuxtLink: { template: '<a><slot /></a>' }
      }
    }
  })
}

describe('Cta.vue', () => {
  it('renders provided title, description and buttons', () => {
    const wrapper = factory({
      title: 'Hello World',
      description: 'Some description',
      buttons: [
        { label: 'Book', url: '/book' },
        { label: 'Learn', url: '/learn' }
      ]
    })

    expect(wrapper.text()).toContain('Hello World')
    expect(wrapper.text()).toContain('Some description')

    const links = wrapper.findAll('a')
    expect(links).toHaveLength(2)
    expect(links[0].text()).toBe('Book')
    expect(links[1].text()).toBe('Learn')
  })
})
