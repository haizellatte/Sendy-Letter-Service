package com.witchdelivery.messageapp.global.response;

import com.google.gson.Gson;
import com.witchdelivery.messageapp.global.exception.ExceptionCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// ErrorResponder 클래스는 ErrorResponse를 출력 스트림으로 생성하는 역할
public class ErrorResponder {
    public static void sendErrorResponse(HttpServletResponse response, HttpStatus status) throws IOException {
        ErrorResponse errorResponse = ErrorResponse.of(status);

        sendError(response, status, errorResponse);
    }

    public static void sendErrorResponse(HttpServletResponse response, HttpStatus status, String message) throws IOException {
        ErrorResponse errorResponse = ErrorResponse.of(status, message);

        sendError(response, status, errorResponse);
    }

    public static void sendErrorResponse(HttpServletResponse response, ExceptionCode exceptionCode) throws IOException {
        ErrorResponse errorResponse = ErrorResponse.of(exceptionCode);

        Gson gson = new Gson();
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(errorResponse.getStatus());
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }

    private static void sendError(HttpServletResponse response, HttpStatus status, ErrorResponse errorResponse) throws IOException {
        Gson gson = new Gson();
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class));
    }
}
