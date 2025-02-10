import React from 'react';
import styles from './VideoBackground.module.css'; // Importa los estilos CSS Module (ver abajo)

interface VideoBackgroundProps {
  videoMp4: string; // Ruta al archivo .mp4
  videoWebm?: string; // Ruta al archivo .webm (opcional)
  //posterImage: string; // Ruta a la imagen de "poster"
  title: string; // Título del texto superpuesto
  subtitle: string; // Subtítulo del texto superpuesto
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoMp4,
  videoWebm,
  //posterImage,
  title,
  subtitle,
}) => {
  return (
    <div className={styles.videoContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        //poster={posterImage}
        className={styles.video}
      >
        {videoWebm && <source src={videoWebm} type="video/webm" />}
        <source src={videoMp4} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
      <div className={styles.overlayText}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default VideoBackground;