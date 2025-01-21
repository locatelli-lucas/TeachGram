package com.locatellilucas.teachgram.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.locatellilucas.teachgram.dto.res.login.LoginDTORes;
import com.locatellilucas.teachgram.entities.User;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {

    private final String secret = "my_secret";

    public LoginDTORes generateToken(User newUser) {
        Algorithm algorithm = Algorithm.HMAC256(secret);
        Instant expirationDate = getExpirationDate();

        String token = JWT.create()
                .withIssuer("Teachgram/security")
                .withSubject(newUser.getUsername())
                .withExpiresAt(expirationDate)
                .sign(algorithm);
        
        return new LoginDTORes("Bearer", token, expirationDate.toEpochMilli());
    }

    private Instant getExpirationDate() {
        return LocalDateTime
                .now()
                .plusHours(3)
                .toInstant(ZoneOffset.of("-03:00"));
    }

    public String validateToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secret);

        return JWT.require(algorithm)
                .withIssuer("Teachgram/security")
                .build()
                .verify(token)
                .getSubject();
    }
}
