const getTitleFromView = view => {
  let [view_type, view_id] = view.split(".");
  const title = view_type === "time" ? `TIME SERIES` : `NETWORK`;
  return `${title} VIEW ${view_id}`;
};

export default getTitleFromView;
