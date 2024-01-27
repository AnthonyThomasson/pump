INSERT INTO operators (first_name, last_name, business_name, email, phone_number)
VALUES
    ('James', 'Doe', 'Rock Solid Construction', 'james.doe@rocksolidconstruction.com', '+1 (555) 123-4567'),
    ('Emma', 'Smith', 'Concrete Experts LLC', 'emma.smith@concreteexpertsllc.com', '+1 (555) 234-5678'),
    ('Olivia', 'Johnson', 'Foundation Builders Inc.', 'olivia.johnson@foundationbuildersinc.com', '+1 (555) 345-6789'),
    ('Liam', 'Williams', 'Pinnacle Concrete Works', 'liam.williams@pinnacleconcreteworks.com', '+1 (555) 456-7890'),
    ('Ava', 'Miller', 'Elite Pavers and Concrete', 'ava.miller@elitepaversandconcrete.com', '+1 (555) 567-8901'),
    ('Noah', 'Brown', 'Innovative Concrete Solutions', 'noah.brown@innovativeconcretesolutions.com', '+1 (555) 678-9012'),
    ('Isabella', 'Taylor', 'Quick Set Concrete Services', 'isabella.taylor@quicksetconcreteservices.com', '+1 (555) 789-0123'),
    ('Sophia', 'Lee', 'Tech Stone and Concrete', 'sophia.lee@techstoneandconcrete.com', '+1 (555) 890-1234'),
    ('Jackson', 'Clark', 'Global Concrete Ventures', 'jackson.clark@globalconcreteventures.com', '+1 (555) 901-2345'),
    ('Oliver', 'White', 'Dynamic Concrete Innovations', 'oliver.white@dynamicconcreteinnovations.com', '+1 (555) 012-3456')
ON CONFLICT (email) DO NOTHING;