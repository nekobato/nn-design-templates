import PolygonSliders from "./PolygonSliders.vue";

export default {
  title: "Features/PolygonSliders",
  component: PolygonSliders,
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    count: { control: "number" },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PolygonSliders },
  data: () => ({ values: [] }),
  template:
    '<PolygonSliders :min="min" :max="max" :step="step" :count="count" defaultValue="50" />',
});

export const Primary = Template.bind({});
Primary.args = {
  min: 0,
  max: 100,
  step: 10,
  count: 5,
};
