CREATE TABLE USERS(
    userName VARCHAR(50),
    userEmail VARCHAR (100),
    userAge INT
);

INSERT INTO users(userName,userEmail,userAge) VALUES(
    "Enzo Almeida",
    "enzindoscrias@gmail.com",
    15
);

SELECT * FROM users WHERE userAge > 18;