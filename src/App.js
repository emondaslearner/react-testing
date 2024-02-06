import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainLoader } from "./components/shared/Loader";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

export const queryClient = new QueryClient();

const Layouts = React.lazy(() => import("./Layout"));

function App() {
  return (
    <>
      <Suspense fallback={<MainLoader />}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Layouts />
            </BrowserRouter>
          </QueryClientProvider>
        </Provider>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
