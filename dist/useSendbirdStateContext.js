import { useContext } from 'react';
import { SendbirdSdkContext } from './withSendbird.js';
import './_rollupPluginBabelHelpers-6a3c1c63.js';

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = useContext(SendbirdSdkContext);
  return context;
}

export { useSendbirdStateContext as default };
//# sourceMappingURL=useSendbirdStateContext.js.map
