package com.tbd.phoneadvice.neo4j.repositories;

import com.tbd.phoneadvice.neo4j.models.NodePhone;
import com.tbd.phoneadvice.neo4j.models.NodeUser;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@RepositoryRestResource(collectionResourceRel = "users", path = "users")

@Repository
public interface NodeUserRepository extends Neo4jRepository<NodeUser, Long> {
    NodeUser findByUserID(@Param("userID") Long userID);
}