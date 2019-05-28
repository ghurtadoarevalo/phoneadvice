package com.tbd.phoneadvice.elasticsearch.repositories;

import com.tbd.phoneadvice.mongo.models.Tweet;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DataTweetRepository extends ElasticsearchRepository<Tweet,String> {
    Iterable<Tweet> findByText(String text);
    Iterable<Tweet> findByUserName(String text);
}
