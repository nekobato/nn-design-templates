import AutoFocusNextInput from "./AutoFocusNextInput.vue";

export default {
  title: "Features/AutoFocusNextInput",
  component: AutoFocusNextInput,
};

export const Primary = () => ({
  components: { AutoFocusNextInput },
  data() {
    return {
      value1: "1",
      value2: "",
      value3: "",
    };
  },
  template: `<div><AutoFocusNextInput id="input1" next="input2" maxlength="3" v-model="value1" /> - <AutoFocusNextInput id="input2" next="input3" maxlength="4" v-model="value2" /> - <AutoFocusNextInput id="input3" maxlength="4" v-model="value3" /></div>`,
});
