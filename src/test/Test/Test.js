// @Configuration
// @EnableWebSecurity // (1)
// public class WebSecurityConfig extends WebSecurityConfigurerAdapter { // (1)

// @Override
// protected void configure(HttpSecurity http) throws Exception {  // (2)
//       http
//         .authorizeRequests()
//           .antMatchers("/", "/home").permitAll() // (3)
//           .anyRequest().authenticated() // (4)
//           .and()
//        .formLogin() // (5)
//          .loginPage("/login") // (5)
//          .permitAll()
//          .and()
//       .logout() // (6)
//         .permitAll()
//         .and()
//       .httpBasic(); // (7)
// }
// }