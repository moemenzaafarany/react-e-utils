import React from "react";
import PropTypes from "prop-types";
import eUseBreakpoints, { eBreakpointsProvider } from "../models/eBreakpoints";
import eUseTranslation, { eTranslationProvider } from "../models/eTranslation";

const MultiProvidersChild = ({
  render,
  includeBreakpoints = false,
  includeTranslation = false,
}) => {
  var props = {};
  if (includeBreakpoints) props = { ...props, ...eUseBreakpoints() };
  if (includeTranslation) props = { ...props, ...eUseTranslation() };
  return render(props);
};
const MultiProviders = ({
  providers = [],
  includeBreakpoints = false,
  includeTranslation = false,
  render,
}) => {
  // includeBreakpoints
  if (includeBreakpoints === true) providers.push(eBreakpointsProvider);
  // includeTranslation
  if (includeTranslation === true) providers.push(eTranslationProvider);
  // return
  return providers.reverse().reduceRight((accumulated, Provider) => {
    return <Provider children={accumulated} />;
  }, <MultiProvidersChild render={render} includeBreakpoints={includeBreakpoints} includeTranslation={includeTranslation} />);
};
MultiProviders.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.element, PropTypes.func])
  ),
  render: PropTypes.func.isRequired,
  includeTranslation: PropTypes.bool,
  includeBreakpoints: PropTypes.bool,
};
export default MultiProviders;
