package co.mz.truetech.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.mz.truetech.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
