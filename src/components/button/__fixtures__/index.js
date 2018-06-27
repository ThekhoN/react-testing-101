import Button from "../index";

export default {
  component: Button,
  props: {
    clickHandler: () => {
      console.log("Button: onClick");
    },
    label: "Button"
  }
};
