package com.tbd.phoneadvice;

import com.tbd.phoneadvice.mysql.models.Brand;
import com.tbd.phoneadvice.mysql.models.Phone;
import com.tbd.phoneadvice.mysql.repositories.*;
import org.apache.catalina.User;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PhoneadviceApplication {

    private PhoneRepository phoneRepository;
    private BrandRepository brandRepository;
    private DataSheetRepository dataSheetRepository;
    private GammaRepository gammaRepository;
    private PhoneSpecificationRepository phoneSpecificationRepository;
    private SpecificationRepository specificationRepository;
    private StatisticRepository statisticRepository;
    private WordsBagRepository wordsBagRepository;
    private WordRepository wordRepository;

    public static void main(String[] args) {
        SpringApplication.run(PhoneadviceApplication.class, args);
    }


}


