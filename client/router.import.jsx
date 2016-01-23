import Auth from '/client/components/auth/Auth';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(Auth)
  }
})
