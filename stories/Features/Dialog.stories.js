import Dialog from "./Dialog.vue";

export default {
  title: "Features/Dialog",
  component: Dialog,
};

const Template = () => ({
  components: { Dialog },
  template: "<Dialog />",
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Dialog",
};
