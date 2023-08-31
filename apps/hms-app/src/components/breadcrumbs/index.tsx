import { Breadcrumb } from 'antd';
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Link, useMatches } from 'react-router-dom';

export type BreadcrumbHandleType = {
  breadcrumb: (params?: Record<string, any>) => React.ReactNode;
  icon?: React.ReactNode;
};

export const Breadcrumbs = () => {
  const matches = useMatches();

  const breadcrumbs = matches
    .filter((breadcrumb) => Boolean((breadcrumb.handle as BreadcrumbHandleType | undefined)?.breadcrumb))
    .map((route, index, arr) => {
      const { params, handle } = route;
      const { breadcrumb, icon } = handle as BreadcrumbHandleType;

      return {
        key: route.id,
        title: icon ? (
          <>
            {icon}
            {`  `}
            {breadcrumb(params)}
          </>
        ) : (
          breadcrumb(params)
        ),
        path: index < arr.length - 1 ? route.pathname : route.pathname,
      };
    });

  const itemRender = (route: ItemType, params: Record<PropertyKey, any>, routes: ItemType[], paths: string[]) => {
    const last = routes.indexOf(route) === routes.length - 1;

    if (!last && route.path) {
      return <Link to={route.path}>{route.title}</Link>;
    }

    return <span>{route.title}</span>;
  };

  return <Breadcrumb itemRender={itemRender} items={breadcrumbs} style={{ userSelect: 'none' }} />;
};
