package com.tritech.EsercitazioneFinaleAcademy.services.util;

import com.tritech.EsercitazioneFinaleAcademy.models.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {

    @Autowired
    private  JavaMailSender mailSender;

    public void sendEmail(Products product){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("giuseppeferrara2002@gmail.com");
        message.setTo("giuseppeferrara2002@gmail.com");
        message.setText("Il prodotto " + product.getName() + " è quasi in esaurimento.");
        message.setSubject("asdfghjkl");

        mailSender.send(message);
    }
}
