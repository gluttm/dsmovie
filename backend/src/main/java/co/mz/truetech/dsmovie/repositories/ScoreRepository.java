package co.mz.truetech.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import co.mz.truetech.dsmovie.entities.Movie;
import co.mz.truetech.dsmovie.entities.Score;
import co.mz.truetech.dsmovie.entities.User;

public interface ScoreRepository extends JpaRepository<Score, Long> {

}
