package ch.wgstar.rest;

import org.springframework.http.HttpHeaders;

public final class HttpUtils {

    private HttpUtils() {
    }

    public static HttpHeaders headers() {
        HttpHeaders headers = new HttpHeaders();
        headers.setPragma("no-cache");
        headers.setCacheControl("no-cache");
        headers.setExpires(0);
        return headers;
    }
}