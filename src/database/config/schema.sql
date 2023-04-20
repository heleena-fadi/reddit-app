BEGIN;
INSERT INTO users (email, password,username) values 
('test@gmail.com', '$2a$10$Kyngy48pZN47xfVxUC/Abe7ud3/y08sqNScepwdF0ZCZKrg4vsnn.', 'Fadi'),
('test1@gmail.com', '$2a$10$Kyngy48pZN47xfVxUC/Abe7ud3/y08sqNScepwdF0ZCZKrg4vsnn.', 'Heleena'),
('test2@gmail.com', '$2a$10$Kyngy48pZN47xfVxUC/Abe7ud3/y08sqNScepwdF0ZCZKrg4vsnn.', 'Eman');

INSERT INTO posts (title, content,image, user_id) values 
('post1', 'test post 1', 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',  1),
('post2', 'test post 2', 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',  1),
('post2', 'test post 2', 'https://images.unsplash.com/photo-1490127252417-7c393f993ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',  1);


INSERT INTO comments (content, user_id, post_id) values 
('comment test 1', 1, 1),
('comment test 2', 1, 1),
('comment test 3', 1, 1),
('comment test 4', 1, 1);

COMMIT;