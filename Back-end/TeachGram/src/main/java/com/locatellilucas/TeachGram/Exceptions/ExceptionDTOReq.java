package com.locatellilucas.TeachGram.Exceptions;

import org.springframework.http.HttpStatus;

public record ExceptionDTOReq(HttpStatus status, String message) {
}
