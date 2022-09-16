# Crea la DB si no existe
CREATE DATABASE IF NOT EXISTS tarea1;

# Selecciona la DB si ya existe
USE tarea1;

CREATE TABLE IF NOT EXISTS `users` (
	`id_user` INT NOT NULL AUTO_INCREMENT,
	`nombre` varchar(50) NOT NULL,
	`apellido` varchar(50) NOT NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`contraseña` varchar(255) NOT NULL UNIQUE,
	`categoria` varchar(50) NOT NULL,
	PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `cursos` (
	`id_cursos` INT NOT NULL AUTO_INCREMENT,
	`titulo` varchar(50) NOT NULL,
	`descripción` varchar(255) NOT NULL,
	`imagen` varchar(255) NOT NULL,
	`fecha ini` DATETIME,
	`fecha fin` DATETIME,
	`cupo` INT(255) NOT NULL,
	#`unidades` INT(255) NOT NULL,
	PRIMARY KEY (`id_cursos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `unidades` (
	`id_unidades` INT NOT NULL AUTO_INCREMENT,
	`titulo` varchar(50) NOT NULL,
	`descripción` varchar(255) NOT NULL,
	`fecha inicial` DATETIME NOT NULL,
	`id_clases` BINARY NOT NULL,
	PRIMARY KEY (`id_unidades`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `users / cursos` (
	`id_users/cursos` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`cursos_id` INT NOT NULL,
	PRIMARY KEY (`id_users/cursos`),
    
	CONSTRAINT `fkuser`
    FOREIGN KEY (`user_id`)
    REFERENCES users(`id_user`),
    
    CONSTRAINT `fkcursos`
    FOREIGN KEY (`cursos_id`)
    REFERENCES cursos(`id_cursos`)
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `clases` (
	`id_clases` INT NOT NULL AUTO_INCREMENT,
	`titulo` varchar(50) NOT NULL,
	`descripción` varchar(255) NOT NULL,
	`fecha inicial` DATETIME NOT NULL,
	`visibilidad` TINYINT NOT NULL,
	`id_bloques` INT NOT NULL,
	PRIMARY KEY (`id_clases`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `bloques` (
	`id_bloques` INT NOT NULL AUTO_INCREMENT,
	`titulo` varchar(50) NOT NULL,
	`visibilidad` TINYINT NOT NULL,
	`tipo` varchar(50) NOT NULL,
	`contenido` varchar(255) NOT NULL,
	PRIMARY KEY (`id_bloques`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

#ALTER TABLE `cursos` ADD CONSTRAINT `cursos_fk0` FOREIGN KEY (`unidades`) REFERENCES `unidades`(`id`);

#ALTER TABLE `unidades` ADD CONSTRAINT `unidades_fk0` FOREIGN KEY (`id_clases`) REFERENCES `clases`(`id`);

#ALTER TABLE `users / cursos` ADD CONSTRAINT `users / cursos_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

#ALTER TABLE `users / cursos` ADD CONSTRAINT `users / cursos_fk1` FOREIGN KEY (`cursos_id`) REFERENCES `cursos`(`id`);

#ALTER TABLE `clases` ADD CONSTRAINT `clases_fk0` FOREIGN KEY (`id_bloques`) REFERENCES `bloques`(`id`);







