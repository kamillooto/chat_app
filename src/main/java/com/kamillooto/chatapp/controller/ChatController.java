package com.kamillooto.chatapp.controller;

import com.kamillooto.chatapp.model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/chat")
    @SendTo("/topic/chat")
    public ChatMessage get(final ChatMessage chatMessage) {
        return chatMessage;
    }

}
