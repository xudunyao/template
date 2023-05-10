export const getMenusFromRoutes = (routes, permissions, path = '') => {
  const menus = [];
  let currentMenuKeys = [];
  routes.forEach(({ options, children }) => {
    if (!options?.key) {
      return;
    }
    if (options?.link === path || (options?.link !== '/' && path.indexOf(options?.link) === 0)) {
      currentMenuKeys.push(options.key);
    }
    if (!options.permissionKey || options.allowAccess || permissions?.includes(options.permissionKey)) {
      const menu = {
        ...options,
        visible: options.displayInMenu !== false,
      };
      if (children?.length) {
        const childRes = getMenusFromRoutes(children, permissions, path);
        menu.children = childRes?.menus;
        currentMenuKeys = currentMenuKeys.concat(childRes?.currentMenuKeys || []);
      }
      menus.push(menu);
    }
  });

  return { menus, currentMenuKeys };
};

export default {};
