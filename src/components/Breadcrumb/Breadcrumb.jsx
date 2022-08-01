import useBreadcrumb from "../../hooks/useBreadcrumb";
import styles from "./breadcrumb.module.css";

const Breadcrumb = () => {
  const { state: breadcrumbs } = useBreadcrumb();
  return (
    <nav>
      <ol role="list" className={[styles["breadcrumb"]].join(" ")}>
        {breadcrumbs?.map((el) => {
          return (
            <li key={el.title}>
              <a href="#0" className={el.current ? styles.active : ""}>
                {el.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
