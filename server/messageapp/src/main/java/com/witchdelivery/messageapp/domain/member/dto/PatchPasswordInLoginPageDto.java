package com.witchdelivery.messageapp.domain.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@NoArgsConstructor
public class PatchPasswordInLoginPageDto {
    @NotBlank
    @Email(message = "이메일을 입력해주세요.")
    private String email;   // 이메일(아이디)

    @NotBlank
    @Pattern(regexp="(?=.*[0-9])(?=.*[a-z])(?=.*\\W)(?=\\S+$).{8,16}",
            message = "영문 소문자, 숫자, 특수문자를 포함한 8~16자리를 입력해주세요.")
    private String newPassword;    // 새로운 패스워드
}
