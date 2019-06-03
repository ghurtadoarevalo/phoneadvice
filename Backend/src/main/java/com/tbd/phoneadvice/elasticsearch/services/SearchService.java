package com.tbd.phoneadvice.elasticsearch.services;

import com.tbd.phoneadvice.elasticsearch.repositories.DataTweetRepository;
import com.tbd.phoneadvice.mongo.models.Tweet;

import com.tbd.phoneadvice.mongo.repositories.TweetRepository;
import com.tbd.phoneadvice.sentiment.Classifier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/search")
public class SearchService {

    @Autowired
    DataTweetRepository repository;

    @Autowired
    TweetRepository tweetRepository;

    /*
    @Autowired
    private Classifier classifier;
    */

    @GetMapping(value = "/delete")
    public void deleteAll()
    {
        repository.deleteAll();
    }

    @GetMapping(value = "/update")
    public Iterable<Tweet> update()
    {
        List<Tweet> list = tweetRepository.findAll();
        for(int i = 0 ;i < list.size() ;i++ ) {repository.save(list.get(i)); }
        return repository.findAll();
    }

    @GetMapping(value = "/getAll")
    public Iterable<Tweet> getAll()
    {
        return repository.findAll();
    }

    @GetMapping(value = "/content/{text}")
    public List<Tweet> searchbyContent(@PathVariable final String text)
    {
        return repository.findByText(text);
    }

    @GetMapping(value = "/user/name/{text}")
    public Iterable<Tweet> searchbyUserName(@PathVariable final String text)
    {
        return repository.findByUserName(text);
    }

    /*
    @RequestMapping("/classify")
    public HashMap<String,Double> classify(@RequestParam(value="text") String text) {
        return this.classifier.classify(text);
    }
    */

}