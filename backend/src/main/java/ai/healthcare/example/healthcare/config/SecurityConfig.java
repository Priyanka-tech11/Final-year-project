package ai.healthcare.example.healthcare.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable()) // disable CSRF for frontend fetch
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/auth/**").permitAll() // allow signup/login
                .anyRequest().authenticated() // protect other endpoints
            )
            .formLogin(form -> form.disable()) // disable default Spring login page
            .httpBasic(basic -> basic.disable());

        return http.build();
    }
}