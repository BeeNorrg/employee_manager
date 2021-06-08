INSERT INTO role (id, title, salary, dep_id)
VALUES (1, "Sales Head", 60000, 1);
INSERT INTO role (id, title, salary, dep_id)
VALUES (2, "Salesperson", 50000, 1);
INSERT INTO role (id, title, salary, dep_id)
VALUES (3, "Legal Team Head", 100000, 2);
INSERT INTO role (id, title, salary, dep_id)
VALUES (4, "Lawyer", 90000, 2);
INSERT INTO role (id, title, salary, dep_id)
VALUES (5, "Accountant", 70000, 3);
INSERT INTO role (id, title, salary, dep_id)
VALUES (6, "Head Engineer", 90000, 4);
INSERT INTO role (id, title, salary, dep_id)
VALUES (7, "Software Engineer", 80000, 4);

-- creating department templates
INSERT INTO department (id, name) VALUES (1, "Sales");
INSERT INTO department (id, name) VALUES (2, "Legal");
INSERT INTO department (id, name) VALUES (3, "Financing");
INSERT INTO department (id, name) VALUES (4, "Engineering");

-- creating employee templates with sample data
INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (1, "John", "117", 1, NULL);

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (2, "Kelly", "087", 2, 1);

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (3, "Samuel", "034", 3, NULL);

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (4, "Fred", "104", 4, 3);

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (5, "Holly", "Tanaka", 5, NULL);

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (6, "Olympia", "Vale", 6, NULL);

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (7, "Edward", "Buck", 7, 6);

INSERT INTO employees (id, first_name, last_name, job_id, manager_id)
VALUES (8, "Avery", "Johnson", 7, 6); 