# gro-light-automation

Current raspberry pi project to control/automate an indoor grow light and fan for hydroponics/indoor plant growing.

This is not a complete project.  I continually update as I'm working on it.

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
[Some video demos](https://www.youtube.com/channel/UC1BSal1gf-syAfSE5unBN1g)

---
*Spring Security implemented based on Stephan Zerhusen's demo
- altered to utilize mysql rather than h2.
- altered returning of token to return user details along with token.
- altered exception handling to handle method level autorization exceptions.
- altered autentication/authorization exceptions to return json data using ApiError model class.
- added CorsFilter to allow prefilght OPTIONS request for angular 2 cors requests

[jwt-spring-security-demo](https://github.com/szerhusenBC/jwt-spring-security-demo)
