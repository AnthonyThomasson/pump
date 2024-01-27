INSERT INTO customers (first_name, last_name, email, phone_number)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '+1 (555) 123-4567'),
    ('Jane', 'Smith', 'jane.smith@example.com', '+1 (555) 234-5678'),
    ('Alice', 'Johnson', 'alice.johnson@example.com', '+1 (555) 345-6789'),
    ('Bob', 'Williams', 'bob.williams@example.com', '+1 (555) 456-7890'),
    ('Eva', 'Miller', 'eva.miller@example.com', '+1 (555) 567-8901'),
    ('Daniel', 'Brown', 'daniel.brown@example.com', '+1 (555) 678-9012'),
    ('Sophia', 'Taylor', 'sophia.taylor@example.com', '+1 (555) 789-0123'),
    ('David', 'Lee', 'david.lee@example.com', '+1 (555) 890-1234'),
    ('Emma', 'Clark', 'emma.clark@example.com', '+1 (555) 901-2345'),
    ('Michael', 'White', 'michael.white@example.com', '+1 (555) 012-3456')
ON CONFLICT (email) DO NOTHING;