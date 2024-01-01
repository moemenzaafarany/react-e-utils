import React from "react";
import PropTypes from "prop-types";
import eType from "../js/eType";

const MultiProviders = ({
  providers = [{ provider: null, props: null }],
  children,
}) => {
  // eslint-disable-next-line react/no-children-prop
  const child = <MultiProvidersChild children={children} />;
  const provds = providers.reverse().reduceRight((accumulated, obj) => {
    if (eType.obj(obj)) {
      return <obj.provider {...obj.props}>{accumulated}</obj.provider>;
    }
    return accumulated;
  }, child);

  return provds;
};
const MultiProvidersChild = ({ children }) => {
  return <>{children}</>;
};
MultiProvidersChild.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MultiProviders;
