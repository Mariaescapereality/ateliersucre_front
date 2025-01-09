import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';

const mockPush = jest.fn();

jest.mock('vue-router', () => ({
  ...jest.requireActual('vue-router'),
  useRouter: () => ({ push: mockPush }),
}));

describe('LoginPage.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      state: {},
      mutations: {
        setUser: jest.fn(),
        setToken: jest.fn(),
      },
    });
  });

  it('renders the login page correctly', () => {
    const wrapper = mount(LoginPage, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find('h1').text()).toBe('Connexion');
    expect(wrapper.find('label[for="email"]').text()).toBe('E-mail');
    expect(wrapper.find('label[for="motdepasse"]').text()).toBe('Mot De Passe');
    expect(wrapper.find('button').text()).toBe('Connexion');
  });

  it('binds v-model inputs correctly', async () => {
    const wrapper = mount(LoginPage, {
      global: {
        plugins: [store],
      },
    });

    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#motdepasse');
    const rememberMeCheckbox = wrapper.find('#rememberMe');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');
    await rememberMeCheckbox.setChecked(true);

    expect(wrapper.vm.email).toBe('test@example.com');
    expect(wrapper.vm.motdepasse).toBe('password123');
    expect(wrapper.vm.rememberMe).toBe(true);
  });

  it('shows an error when login is attempted without input', async () => {
    console.error = jest.fn(); // Suppress error logs in the test output

    const wrapper = mount(LoginPage, {
      global: {
        plugins: [store],
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');

    expect(console.error).toHaveBeenCalledWith('Veuillez entrer un email et un mot de passe.');
  });

  it('calls the login function with valid input', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'mockToken' }),
      })
    );

    const wrapper = mount(LoginPage, {
      global: {
        plugins: [store],
      },
    });

    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#motdepasse');
    const button = wrapper.find('button');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');
    await button.trigger('click');

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/users/login', expect.any(Object));
  });

  it('redirects to the profile page on successful login', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'mockToken' }),
      })
    );

    const wrapper = mount(LoginPage, {
      global: {
        plugins: [store],
      },
    });

    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#motdepasse');
    const button = wrapper.find('button');

    await emailInput.setValue('test@example.com');
    await passwordInput.setValue('password123');
    await button.trigger('click');

    expect(mockPush).toHaveBeenCalledWith('/PageProfile');
  });
});
