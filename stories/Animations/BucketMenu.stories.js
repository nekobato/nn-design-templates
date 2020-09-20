import BucketMenu from "./BucketMenu.vue";

export default {
  title: "Animation/BucketMenu",
  component: BucketMenu,
};

const Template = () => ({
  components: { BucketMenu },
  template: "<BucketMenu></BucketMenu>",
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "BucketMenu",
};
