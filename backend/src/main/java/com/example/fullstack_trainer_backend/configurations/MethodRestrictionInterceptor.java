package com.example.fullstack_trainer_backend.configurations;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.List;

@Component
public class MethodRestrictionInterceptor implements HandlerInterceptor {
    private static final Logger logger = LoggerFactory.getLogger(MethodRestrictionInterceptor.class);

    // Nur diese URL darf alle Methoden nutzen
    private static final List<String> FULL_ACCESS_ORIGINS = List.of(
            "http://localhost:3000",
            "http://localhost:5173",
            "http://217.154.77.26:3000/"
    );

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String origin = request.getHeader("Origin");
        String method = request.getMethod();

        logger.info("Interceptor - Origin: {}, Methode: {}", origin, method);

        // Wenn kein Origin gesetzt ist oder der Origin nicht in FULL_ACCESS_ORIGINS ist
        if (origin == null || !FULL_ACCESS_ORIGINS.contains(origin)) {
            // Nur GET erlauben, andere Methoden blockieren
            if (!"GET".equalsIgnoreCase(method)) {
                logger.warn("Anfrage von {} mit Methode {} blockiert", origin != null ? origin : "unbekannt", method);
                response.setStatus(HttpServletResponse.SC_FORBIDDEN); // 403 Forbidden
                return false;
            }
        }

        return true;
    }
}