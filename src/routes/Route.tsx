import React from 'react';
import {
  Route as RouteDOM,
  RouteProps as RouteDOMProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends RouteDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { token } = useAuth();

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: isPrivate ? '/' : 'home',
                state: { from: location },
              }}
            />
          );
      }}
    />
  );
};

export { Route };
