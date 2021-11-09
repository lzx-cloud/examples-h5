//路由拦截组件
function  Intercept ({ component:Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

export default Intercept