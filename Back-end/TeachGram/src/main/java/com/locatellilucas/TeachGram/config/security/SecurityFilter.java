package com.locatellilucas.teachgram.config.security;

import com.locatellilucas.teachgram.entities.User;
import com.locatellilucas.teachgram.repositories.UserRepository;
import com.locatellilucas.teachgram.services.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserRepository userRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = getToken(request);

        if (token != null) {
            String username = tokenService.validateToken(token);
            Optional<User> user = userRepository.findByUsername(username);

            if(user.isEmpty()) throw new RuntimeException("User not found");

            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    user.get(),
                    null,
                    user.get().getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authToken);
        }
    }

    private String getToken(HttpServletRequest request) {
        String token = request.getHeader("Authorization");

        if(token != null && token.startsWith("Bearer ")) return token.substring(7);

        return null;
    }
}
