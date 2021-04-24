import React from 'react';
import CheckPermissions from './CheckPermissions';
/** No page can be accessed by default default is "NULL" */

const Exception403 = () => 403;

export const isComponentClass = (component) => {
  if (!component) return false;
  const proto = Object.getPrototypeOf(component);
  if (proto === React.Component || proto === Function.prototype) return true;
  return isComponentClass(proto);
}; // Determine whether the incoming component.js has been instantiated
// AuthorizedRoute is already instantiated
// Authorized  render is already instantiated, children is no instantiated
// Secured is not instantiated

const checkIsInstantiation = (target) => {
  if (isComponentClass(target)) {
    const Target = target;
    return (props) => <Target {...props} />;
  }

  if (React.isValidElement(target)) {
    return (props) => React.cloneElement(target, props);
  }

  return () => target;
};
/**
 * Used to determine whether you have permission to access this view  authority  string, () => boolean | Promise e.g. 'user'  user
 * e.g. 'user,admin' Both user and admin can access e.g. ()=>boolean Return true to access, Return false can not be accessed e.g. Promise then can access
 * catch cannot access e.g. authority support incoming string, () => boolean | Promise e.g. 'user' only user
 * user can access e.g. 'user, admin' user and admin can access e.g. () => boolean true to be able
 * to visit, return false can not be accessed e.g. Promise then can not access the visit to catch
 *
 * @param {string | function | Promise} authority
 * @param {ReactNode} error non-required parameter
 */

const authorize = (authority, error) => {
  /**
   * Conversion into a class Prevents errors from being reported when staticContext cannot be found when the string is passed in String parameters can cause staticContext
   * not found error
   */
  let classError = false;

  if (error) {
    classError = () => error;
  }

  if (!authority) {
    throw new Error('authority is required');
  }

  return function decideAuthority(target) {
    const component = CheckPermissions(authority, target, classError || Exception403);
    return checkIsInstantiation(component);
  };
};

export default authorize;
