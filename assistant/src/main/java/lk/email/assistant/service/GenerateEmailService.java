package lk.email.assistant.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lk.email.assistant.entity.EmailRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class GenerateEmailService {
    private final WebClient webClient;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiKey;

    public GenerateEmailService(WebClient.Builder webClient) {
        this.webClient = webClient.build();
    }

    public String generateReply(EmailRequest emailRequest) {
        String prompt = buildPrompt(emailRequest);
        Map<String, Object> requestBody = craftRequest(prompt);
        String response = webClient.post()
                .uri(geminiApiUrl + geminiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return extractResponseContent(response);
    }

    private String buildPrompt(EmailRequest emailRequest) {
        StringBuilder prompt = new StringBuilder();

        prompt.append("You are a local email assistant from Sri Lanka. ");
        prompt.append("You only reply in Sinhala language. ");
        prompt.append("Your task is to write a clear, professional email reply to the message below. ");

        if (!emailRequest.getTone().trim().isBlank()) {
            prompt.append("The reply should use a ");
            prompt.append(emailRequest.getTone().toLowerCase());
            prompt.append(" tone. ");
        }

        prompt.append("Ignore the original subject line. ");
        prompt.append("without any explanations, notes, or extra text. ");
        prompt.append("Output should look exactly like a normal email body. ");
        prompt.append("Extract the recipient’s and sender’s names from the original email if available. ");
        prompt.append("Write the reply as if you are the receiver of the email, addressing the sender directly. ");

        prompt.append("\n\n--- Original Email ---\n");
        prompt.append(emailRequest.getEmailContent());

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

    private String extractResponseContent(String response) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            return rootNode.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

        } catch (Exception e) {
            return "Error processing request: " + e.getMessage();
        }
    }
}
