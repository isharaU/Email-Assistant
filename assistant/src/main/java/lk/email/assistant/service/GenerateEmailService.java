package lk.email.assistant.service;

import lk.email.assistant.entity.EmailRequest;

public class GenerateEmailService {
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
}
