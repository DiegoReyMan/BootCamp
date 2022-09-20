# 1.1
/*Utilizando la base de datos de películas queremos conocer, por un lado, los títulos y el
nombre del género de todas las series de la base de datos.*/ 

# SELECT series.title, genres.name FROM series
# INNER JOIN genres ON genres.id = series.genre_id

#1.2
/*Por otro, necesitamos listar los
títulos de los episodios junto con el nombre y apellido de los actores que trabajan en cada
uno de ellos.*/

SELECT episodes.title, actors.first_name, actors.last_name FROM episodes
INNER JOIN actor_episode ON actor_episode.episode_id = episodes.id
INNER JOIN actors ON actor_episode.actor_id = actors.id

# 2
/*Para nuestro próximo desafío necesitamos obtener a todos los actores o actrices (mostrar
nombre y apellido) que han trabajado en cualquier película de la saga de la Guerra de las
galaxias, pero ¡cuidado!: debemos asegurarnos de que solo se muestre una sola vez cada
actor/actriz.*/

# SELECT DISTINCT actors.first_name, actors.last_name FROM movies
# INNER JOIN actor_movie ON actor_movie.movie_id = movies.id
# INNER JOIN actors ON actor_movie.actor_id = actors.id
# WHERE movies.title LIKE "%Guerra%"

#3
/*Debemos listar los títulos de cada película con su género correspondiente. En el caso de
que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda
podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.*/

# SELECT movies.title, COALESCE(genres.name, "N/A") FROM movies
# LEFT JOIN genres ON movies.genre_id = genres.id

#4
/*Necesitamos mostrar, de cada serie, la cantidad de días desde su estreno hasta su fin, con
la particularidad de que a la columna que mostrará dicha cantidad la renombraremos:*/

# SELECT series.title, DATEDIFF(series.end_date, series.release_date) AS "Duracion" FROM series 

#5.1
/*Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.*/

# SELECT actors.first_name FROM actors 
# WHERE LENGTH(actors.first_name) > 6
# ORDER BY actors.first_name

#5.2
/*Debemos mostrar la cantidad total de los episodios guardados en la base de datos.*/

# SELECT COUNT(*) FROM episodes

#5.3
/*Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total
de temporadas que tiene cada una de ellas.*/

# SELECT series.title, COUNT(seasons.serie_id) FROM series
# INNER JOIN seasons ON seasons.serie_id = series.id
# GROUP BY series.title

#5.4
/*Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor
o igual a 3.*/

# SELECT genres.name, COUNT(movies.genre_id) AS "Cantidad" FROM genres
# INNER JOIN movies ON movies.genre_id = genres.id
# GROUP BY genres.name
# HAVING COUNT(movies.genre_id) > 3



