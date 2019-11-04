import { useState, useEffect } from "react";

const useFetch = (url, options = {}, updateDeps = []) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    (async () => {
      try {
        const response = await fetch(url, { ...options, signal });
        const data = await response.json();
        setState({
          loading: false,
          data,
          error: null
        });
      } catch (error) {
        if (error.name === "AbortError") return;
        setState({ loading: false, data: null, error });
        throw error;
      }
    })();

    return () => abortController.abort();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...updateDeps]);

  const updateData = newData => {
    if (state.data instanceof Array || typeof state.data !== "object")
      return setState({
        ...state,
        data: newData
      });
    return setState({
      ...state,
      data: { ...state.data, ...newData }
    });
  };

  return [state.loading, state.data, state.error, updateData];
};

export default useFetch;
