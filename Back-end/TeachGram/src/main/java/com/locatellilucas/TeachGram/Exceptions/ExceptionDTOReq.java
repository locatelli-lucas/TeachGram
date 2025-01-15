package com.locatellilucas.teachgram.exceptions;

import org.springframework.http.HttpStatus;

public record ExceptionDTOReq(HttpStatus status, String message) {
}
