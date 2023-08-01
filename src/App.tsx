import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Loading, ErrorFallback } from "./components";
import { AppRoutes } from "./routes";

import "./styles/app.scss";


function App(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      {/*loading action when api error*/}
      {/*<ErrorBoundary FallbackComponent={ErrorFallback}>{loading ? <Loading /> : <AppRoutes />}</ErrorBoundary>*/}
      {/* @ts-ignore */}
      <ErrorBoundary FallbackComponent={ErrorFallback}>{<AppRoutes />}</ErrorBoundary>
    </Suspense>
  );
}

export default App;
