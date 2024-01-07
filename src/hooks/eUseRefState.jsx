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
    set state(v) {
      state.value = v;
    },
    get ref() {
      return ref.value;
    },
    set ref(v) {
      ref.value = v;
    },
    get value() {
      return ref.value;
    },
    set value(v) {
      ref.value = v;
      state.value = v;
    },
  };
};

const eUseRefState = RefState;
export default eUseRefState;
