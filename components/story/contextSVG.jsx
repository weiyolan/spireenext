import { createContext, useContext } from 'react';

const SVGContext = createContext();

export function SVGWrapper({ children, prevRatio, myRatio,scrollMin,scrollMax ,animationSpeed}) {

  let sharedState = {
    myRatio: myRatio,
    prevRatio: prevRatio,
    scrollMin:scrollMin,
    scrollMax:scrollMax,
    animationSpeed:animationSpeed,
    }

  return (
    <SVGContext.Provider value={sharedState}>
      {children}
    </SVGContext.Provider>
  );
}

export function useSVGContext() {
  return useContext(SVGContext);
}