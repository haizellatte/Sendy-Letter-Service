package com.witchdelivery.messageapp.security.auth.handler;

import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import com.witchdelivery.messageapp.global.response.ErrorResponder;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.security.SignatureException;

// 인증 과정에서 AuthenticationException이 발생할 경우 호출

@Slf4j
@Component
public class MemberAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        Exception exception = (Exception) request.getAttribute("exception");

        // 클라이언트 ErrorResponse 전송
        if(exception instanceof ExpiredJwtException) {
            ErrorResponder.sendErrorResponse(response, ExceptionCode.ACCESS_TOKEN_EXPIRED);
        } else {
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
        }

        logExceptionMessage(authException, exception);
    }

    private void logExceptionMessage(AuthenticationException authException, Exception exception) {
        String message = exception != null ? exception.getMessage() : authException.getMessage();
        log.warn("Unauthorized error happened: {}", message);
    }
}
