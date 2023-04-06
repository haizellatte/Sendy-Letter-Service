package com.witchdelivery.messageapp.domain.message.mapper;

import com.witchdelivery.messageapp.domain.message.dto.MessagePostDto;
import com.witchdelivery.messageapp.domain.message.dto.MessageResponseDto;
import com.witchdelivery.messageapp.domain.message.entity.Message;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MessageMapper {
    Message messagePostDtoToMessage(MessagePostDto messagePostDto);
    MessageResponseDto messageToMessageResponseDto(Message message);
    List<MessageResponseDto> messageToMessageResponseDtos(List<Message> messages);

    }
