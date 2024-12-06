import { useAuth } from "../context/AuthContext.jsx";
import { useActiveSection } from "../context/ActiveSectionContext.jsx";
import styles from "./sidebar.module.css";
import svgs from "../assets/svg/svg.js";

const Sidebar = ({ menus }) => {
  const { user } = useAuth();
  const { activeSection, setActiveSection } = useActiveSection();

  const handleOptionClick = (option) => {
    setActiveSection(option);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>Clinikos</h1>
      </div>

      <div className={styles.option_container}>
        {menus.map((menu) => (
          <div
            key={menu.menu_name}
            className={`${styles.option} ${
              activeSection === menu.menu_name ? styles.active : ""
            }`}
            onClick={() => handleOptionClick(menu)}
          >
            {menu.menu_name}
          </div>
        ))}
      </div>

      <div className={styles.settings}>
        <img className={styles.icon} src={svgs.user} alt="user" />
        <img className={styles.icon} src={svgs.config} alt="config" />
      </div>
    </div>
  );
};

export default Sidebar;
