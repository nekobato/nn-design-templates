import Modal from "./Modal.vue";

export default {
  title: "Features/Modal",
  component: Modal,
};

const Template = () => ({
  components: { Modal },
  template: "<Modal />",
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Modal",
};
