import React, { useEffect, useMemo } from "react";
import ImageList from "../../components/modules/imageList/view/ImageList";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import { setBreadcrumb } from "../../reducers/BreadcrumbReducer";

const ImageListPage = () => {
  const { _, dispatch: breadcrumbDispatcher } = useBreadcrumb();

  const breadcrumbs = useMemo(
    () => [
      { title: "Dashboard", link: "dashboard" },
      { title: "Tech Card", link: "tech-card" },
      { title: "List of studies", link: "list-of-studies", current: true },
    ],
    []
  );

  useEffect(() => {
    breadcrumbDispatcher(setBreadcrumb(breadcrumbs));
  }, [breadcrumbDispatcher, breadcrumbs]);

  return <ImageList />;
};

export default ImageListPage;
