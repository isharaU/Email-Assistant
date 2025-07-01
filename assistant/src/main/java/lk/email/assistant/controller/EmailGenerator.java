package lk.email.assistant.controller;

import lk.email.assistant.entity.EmailRequest;
import lk.email.assistant.service.GenerateEmailService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGenerator {

    private GenerateEmailService generateEmailService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest) {
        String response = generateEmailService.generateReply(emailRequest);
        return ResponseEntity.ok(response);
    }
}
