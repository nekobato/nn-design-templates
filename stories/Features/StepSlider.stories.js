import StepSlider from "./StepSlider.vue";

export default {
  title: "Features/StepSlider",
  component: StepSlider,
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    value: { control: "number" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { StepSlider },
  data: () => ({ sliderValue: args.value }),
  template: '<StepSlider :min="min" :max="max" :step="step" v-model="sliderValue" />',
});

export const Primary = Template.bind({});
Primary.args = {
  min: 0,
  max: 100,
  step: 10,
  value: 20,
};
