import React from "react";
import PropTypes from "prop-types";
import eType from "../js/eType";
import {
  eBreakpointsContext,
  eBreakpointsProviderProps,
} from "../models/eBreakpoints";
import {
  eTranslationContext,
  eTranslationProviderProps,
} from "../models/eTranslation";

const MultiProvidersChild = ({ children }) => {
  return <>{children}</>;
};
const MultiProviders = ({
  contexts = [{ context: null, props: null }],
  children,
  includeBreakpoints = false,
  includeTranslation = false,
}) => {
  // includeBreakpoints
  if (includeBreakpoints === true)
    contexts.push({
      context: eBreakpointsContext,
      props: eBreakpointsProviderProps,
    });
  // includeTranslation
  if (includeTranslation === true)
    contexts.push({
      context: eTranslationContext,
      props: eTranslationProviderProps,
    });
  // do
  const child = <MultiProvidersChild children={children} />;
  const providers = contexts.reverse().reduceRight((accumulated, obj) => {
    if (eType.obj(obj)) {
      return (
        <obj.context.Provider {...obj.props}>
          {accumulated}
        </obj.context.Provider>
      );
    }
    return accumulated;
  }, child);
  // return
  return providers;
};
MultiProviders.propTypes = {
  contexts: PropTypes.arrayOf(
    PropTypes.shape({
      context: PropTypes.object,
      props: PropTypes.object,
    })
  ),
  children: PropTypes.element.isRequired,
  includeTranslation: PropTypes.bool,
  includeBreakpoints: PropTypes.bool,
};
export default MultiProviders;
