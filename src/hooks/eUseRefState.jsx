import eUseRef from "./eUseRef";
import eUseState from "./eUseState";

//==============================< stateRef
export const RefState = (initValue) => {
  const state = eUseState(initValue);
  const ref = eUseRef(initValue);

  return {
    get state() {
      return state.value;
    },
    set state(value) {
      state.value = value;
    },
    get ref() {
      return ref.value;
    },
    set ref(value) {
      ref.value = value;
    },
    get value() {
      return ref.value;
    },
    set value(value) {
      ref.value = value;
      state.value = value;
    },
  };
};

const eUseRefState = RefState;
export default eUseRefState;
