# gro-light-automation

Current raspberry pi project to control/automate an indoor grow light and fan for hydroponics/indoor plant growing.

Technologies:
* Angular 2 frontend
* Spring Boot REST Api
* MySQL to store sensor data.
* MQTT on the raspberry pi.

---
# Screenshots
[Parital UI Mockup](https://goo.gl/photos/HAjHsHN71tgkS3ZT9)

---
# Video
[Demoing login with JWT authentication](https://www.youtube.com/watch?v=7Wa6Hrx7cm0)

---
*Spring Security implemented based on Stephan Zerhusen's demo
- altered to utilize mysql rather than h2.
- altered returning of token to return user details along with token.
- altered exception handling to handle method level autorization exceptions.
- altered autentication/authorization exceptions to return json data using ApiError model class.

[jwt-spring-security-demo](https://github.com/szerhusenBC/jwt-spring-security-demo)
