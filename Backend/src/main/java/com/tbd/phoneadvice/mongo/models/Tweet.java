package com.tbd.phoneadvice.mongo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.google.gson.annotations.SerializedName;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.xml.soap.Text;
import java.util.Date;


@Data
@Setter
@NoArgsConstructor
@Document(indexName = "tweets", type = "tweets",shards = 2)
@JsonInclude(JsonInclude.Include.NON_EMPTY)
//@JsonIgnoreProperties(value = {"createdAt"}, allowGetters = true)
public class Tweet {


    @Id
    private Long id;
    @SerializedName("created_at")
    private String createdAt;

    private String text;
    private String lang;
    private User user;

    @SerializedName("retweet_count")
    private int retweetCount;

    @SerializedName("favorite_count")
    private int favoriteCount;

    public Tweet(Long id ,String text, String lang, User user, int retweetCount, int favoriteCount) {
        this.id = id;
        this.text = text;
        this.lang = lang;
        this.user = user;
        this.retweetCount = retweetCount;
        this.favoriteCount = favoriteCount;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getRetweetCount() {
        return retweetCount;
    }

    public void setRetweetCount(int retweetCount) {
        this.retweetCount = retweetCount;
    }

    public int getFavoriteCount() {
        return favoriteCount;
    }

    public void setFavoriteCount(int favoriteCount) {
        this.favoriteCount = favoriteCount;
    }

    @Override
    public String toString() {
        return "Tweet{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", lang='" + lang + '\'' +
                ", user=" + user +
                ", retweetCount=" + retweetCount +
                ", favoriteCount=" + favoriteCount +
                '}';
    }

}

