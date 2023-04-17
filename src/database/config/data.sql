BEGIN;

DROP TABLE IF EXISTS USERS, POSTS, COMMENTS CASCADE;

CREATE TABLE "users"(
     id SERIAL PRIMARY KEY,
    "email" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
);

CREATE TABLE "posts"(
    id SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" VARCHAR(255),
    "created_by" INTEGER NOT NULL,
    "timestamp" VARCHAR(100) NOT NULl,
  
);
CREATE TABLE "comments"(
    id SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
);

COMMIT;


