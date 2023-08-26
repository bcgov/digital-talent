import { Breadcrumb } from 'antd';
import { useMatches } from 'react-router-dom';

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
        href: index < arr.length - 1 ? route.pathname : undefined,
      };
    });

  return <Breadcrumb items={breadcrumbs} style={{ userSelect: 'none' }} />;
};
