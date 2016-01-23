import Auth from '/client/components/auth/Auth.import.jsx';
FlowRouter.route('/', {
  action() {
    ReactLayout.render(Auth)
  }
})
