import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Principal.module.css'; // Cambio de nombre del archivo CSS

const PanelDeControl = () => {
  const [activeItem, setActiveItem] = useState('configuracion');

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src="tec2.png" alt="LOGO" />
        </div>
        <div className={styles['menu-items']}>
          <div
            className={`${styles['menu-item']} ${activeItem === 'estado_riego' && styles.active}`}
            onClick={() => handleItemClick('estado_riego')}
          >
            <Link href="/Estadoriego">Estado del riego</Link>
          </div>
          <div
            className={`${styles['menu-item']} ${activeItem === 'programar_riego' && styles.active}`}
            onClick={() => handleItemClick('programar_riego')}
          >
            <Link href="/Programariego">Programar riego</Link>
          </div>
          <div
            className={`${styles['menu-item']} ${activeItem === 'usuarios' && styles.active}`}
            onClick={() => handleItemClick('usuarios')}
          >
            <Link href="/Usuarios">Usuarios</Link>
          </div>
          <div
            className={`${styles['menu-item']} ${activeItem === 'configuracion' && styles.active}`}
            onClick={() => handleItemClick('configuracion')}
          >
            <Link href="/Configsistema">Conf. del sistema</Link>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {/* AquÃ­ va el contenido principal */}
      </div>
    </div>
  );
};

export default PanelDeControl;