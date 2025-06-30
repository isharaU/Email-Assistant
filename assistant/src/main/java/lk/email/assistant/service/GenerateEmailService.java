package lk.email.assistant.service;

import lk.email.assistant.entity.EmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

public class GenerateEmailService {
    private final WebClient webClient;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiKey;

    public GenerateEmailService(WebClient webClient) {
        this.webClient = webClient;
    }

    public String generateReply(EmailRequest emailRequest) {
        String prompt = buildPrompt(emailRequest);
        Map<String, Object> requestBody = craftRequest(prompt);

        return null;
    }

    private String buildPrompt(EmailRequest emailRequest) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("Generate an email reply for the following email.");
        if (!emailRequest.getTone().trim().isBlank()) {
            prompt.append("Use ");
            prompt.append(emailRequest.getTone());
            prompt.append(" tone.");
        }
        prompt.append("Please ignore the subject.");
        prompt.append("\nReceived Email:\n").append(emailRequest.getEmailContent());
        return prompt.toString();
    }

    private Map<String, Object> craftRequest(String prompt) {
        return Map.of(
                "contents", new Object[]{
                        Map.of(
                                "parts", new Object[]{
                                        Map.of("text", prompt)
                                }
                        )
                }
        );
    }
}
