drop database studentdb;
drop user student;
create user student with password 'pass';
create database studentdb with template=template0 owner=student;
\connect studentdb;
alter default privileges grant all on tables to student;
alter default privileges grant all on sequences to student;