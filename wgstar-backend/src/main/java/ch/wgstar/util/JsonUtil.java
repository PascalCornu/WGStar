package ch.wgstar.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.paramnames.ParameterNamesModule;

import java.io.IOException;

public final class JsonUtil {

    private static final ObjectMapper objectMapper;

    private JsonUtil() {}

    static {
        objectMapper = new ObjectMapper()
                .registerModule(new ParameterNamesModule())
                .registerModule(new Jdk8Module())
                .registerModule(new JavaTimeModule())
                .disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
    }
    public static ObjectMapper jsonMapper() {
        return objectMapper;
    }

    public static <T> String writeValueAsString(T o) throws JsonProcessingException {
        return objectMapper.writeValueAsString(o);
    }

    public static <T> T readValue(String content, Class<T> valueType) throws IOException {
        return objectMapper.readValue(content, valueType);
    }

}