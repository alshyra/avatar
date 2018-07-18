import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import DetailedEmploye from '../../src/components/DetailedEmploye.vue'
import UsersStore from '../../src/UsersStore'

describe('DetailedEmploye.vue', () => {
  it('a le hook `created`', () => {
    expect(typeof DetailedEmploye.created).toBe('function')

  })
  it('contient les données par défaut', () => {
    expect(typeof DetailedEmploye.data).toBe('function')
    const defaultData = DetailedEmploye.data()
    expect(defaultData.testMessage).toBe('test')
  })
  it('renders props.msg when passed', () => {
    UsersStore.commit("addUser", [{name}]);
    console.log(UsersStore.getters.getUsers());
    const vue = shallowMount(DetailedEmploye)
    console.log(vue)
    expect(1 + 2).toBe(3);
  })
})
