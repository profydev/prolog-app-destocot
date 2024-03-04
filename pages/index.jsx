import { Routes } from "@config/routes";
import styles from "./index.module.scss";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/documentation", label: "Documentation" },
  { href: "/pricing", label: "Pricing" },
];

const IssuesPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logoContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/logo-large.svg"
                alt="Prolog logo"
                className={styles.logo}
              />
            </div>
            <nav>
              <ul className={styles.navContainer}>
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className={styles.navLink}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.dashboardLinkContainer}>
              <a href={Routes.projects} className={styles.dashboardLink}>
                Open Dashboard
              </a>
            </div>
          </div>
        </div>
      </header>
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </div>
  );
};

export default IssuesPage;
