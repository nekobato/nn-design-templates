import PopOver from "./PopOver.vue";

export default {
  title: "Features/PopOver",
  component: PopOver,
};

const Template = () => ({
  components: { PopOver },
  template: '<PopOver class="nn-popover">Hi!</PopOver>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "PopOver",
};
