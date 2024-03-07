import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data, isLoading, isError, error, isRefetching, refetch } =
    useGetProjects();

  if (isLoading || isRefetching) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return (
      <div className={styles.error}>
        <div className={styles.errorContent}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/error-alert-circle.svg" alt="error alert icon" />
          <span className={styles.errorMessage}>
            There was a problem while loading the project data
          </span>
          <button className={styles.errorButton} onClick={() => refetch()}>
            Try again {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/error-arrow-right.svg" alt="error arrow icon" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
