import BackButton from "./BackButton.vue";

export default {
  title: "Features/BackButton",
  component: BackButton,
};

const Template = () => ({
  components: { BackButton },
  template: "<BackButton />",
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "BackButton",
};
