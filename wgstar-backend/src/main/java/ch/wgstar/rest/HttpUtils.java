package ch.wgstar.rest;

import org.springframework.http.HttpHeaders;

/**
 * Autor: Florian Borter
 * Version: 1.0
 * Datum: 23.10.2018
 * Liefert einen Header mit diversen Konfigurationen
 */
public final class HttpUtils {

    private HttpUtils() {
    }

    /**
     * liefert einige Konfigurationen für die Antwort zurück
     * @return headers
     */
    public static HttpHeaders headers() {
        HttpHeaders headers = new HttpHeaders();
        headers.setPragma("no-cache");
        headers.setCacheControl("no-cache");
        headers.setExpires(0);
        return headers;
    }
}