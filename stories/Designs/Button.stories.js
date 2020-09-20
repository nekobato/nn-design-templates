export default {
  title: "Designs/Button",
  argTypes: {
    size: { control: "array" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {},
  template: '<button class="nn-button" :class="{ [size] }">ボタン</button>',
});

export const Default = Template.bind({});
Default.args = {
  size: ["nna-small", "nna-medium"],
  label: "Dialog",
};
