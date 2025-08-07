package com.passamv.financial.repository;

import com.passamv.financial.entity.Historical;
import com.passamv.financial.entity.HistoricalPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoricalRepository extends JpaRepository<Historical, HistoricalPK> {
}
