BEGIN;
INSERT INTO users (email, password,username, gender, user_image) values 
('test@gmail.com', '$2a$10$Kyngy48pZN47xfVxUC/Abe7ud3/y08sqNScepwdF0ZCZKrg4vsnn.', 'Fadi', 'Male', 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'),
('test1@gmail.com', '$2a$10$Kyngy48pZN47xfVxUC/Abe7ud3/y08sqNScepwdF0ZCZKrg4vsnn.', 'Heleena','Female', 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'),
('test2@gmail.com', '$2a$10$Kyngy48pZN47xfVxUC/Abe7ud3/y08sqNScepwdF0ZCZKrg4vsnn.', 'Eman', 'Female', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' );

INSERT INTO posts (title, content,image, user_id) values 
('post1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 1', 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80',  1),
('post2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 2', 'https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',  1),
('post3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 3', 'https://images.unsplash.com/uploads/1412594480669535c9ef9/9d85c477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',  1),
('post4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 4', 'https://images.unsplash.com/uploads/1412594480669535c9ef9/9d85c477?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',  2),
('post5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 5', 'https://images.unsplash.com/photo-1529736576495-1ed4a29ca7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',  2),
('post6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 6', 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',  2),
('post7', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 7', 'https://plus.unsplash.com/premium_photo-1664300368336-358645fa4c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',  3),
('post8', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum justo vitae ipsum ullamcorper, quis tristique quam tincidunt. Sed vel consequat nulla. 8', 'https://images.unsplash.com/photo-1620924049153-4d32fcbe88fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',  3);

INSERT INTO comments (content, user_id, post_id) values 
('comment test 1', 1, 1),
('comment test 2', 2, 1),
('comment test 3', 3, 1),
('comment test 4', 1, 2),
('comment test 5', 2, 2),
('comment test 6', 3, 2),
('comment test 7', 2, 3),
('comment test 8', 3, 3),
('comment test 9', 1, 3),
('comment test 10', 1, 4),
('comment test 11', 2, 4),
('comment test 12', 1, 4),
('comment test 13', 3, 5),
('comment test 14', 2, 5),
('comment test 15', 3, 5),
('comment test 16', 2, 6),
('comment test 17', 3, 6),
('comment test 18', 2, 6),
('comment test 19', 1, 7),
('comment test 20', 1, 7),
('comment test 21', 2, 7),
('comment test 22', 1, 8),
('comment test 23', 3, 8),
('comment test 24', 1, 2),
('comment test 25', 2, 8),
('comment test 26', 1, 3),
('comment test 27', 3, 8),
('comment test 28', 2, 5),
('comment test 29', 1, 6),
('comment test 30', 3, 8);

COMMIT;