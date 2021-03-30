import Button from "./Button.vue";
import Details from "./Details.vue";

export default {
  title: "Designs",
  components: { Button, Details },
};

export const ButtonStyles = () => ({
  components: { Button },
  template: "<Button />",
});

export const DetailsStyle = () => ({
  components: { Details },
  template: "<Details />",
});
