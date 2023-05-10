import { registerMicroApps, start } from 'qiankun';
import { handleUnauthorized } from '@/utils/httpRequest';

// eslint-disable-next-line import/no-dynamic-require
const microApps = require(`./microApps/${process.env.REACT_APP_ENV_NAME}`);

const baseRoute = `${process.env.REACT_APP_ROUTER_BASENAME ? `/${process.env.REACT_APP_ROUTER_BASENAME}` : ''}`;

if (microApps?.default?.length) {
  registerMicroApps(microApps.default.map((m) => ({
    name: m.name,
    entry: m.entry,
    container: '#micro-frontend-container',
    activeRule: `${baseRoute}/${m.path}`,
    props: {
      baseRoute: `${baseRoute}/${m.path}`,
      onUnauthorized: handleUnauthorized,
      ...m.props,
    },
  })));

  start();
}
