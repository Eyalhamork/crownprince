-- Insert sample users
INSERT INTO users (id, email, full_name, role, phone, company) VALUES
('550e8400-e29b-41d4-a716-446655440001', 'admin@crownprince.com', 'Crown Admin', 'admin', '(555) 123-4567', 'Crown Prince Inc'),
('550e8400-e29b-41d4-a716-446655440002', 'manager@crownprince.com', 'Project Manager', 'manager', '(555) 123-4568', 'Crown Prince Inc'),
('550e8400-e29b-41d4-a716-446655440003', 'staff@crownprince.com', 'Field Staff', 'staff', '(555) 123-4569', 'Crown Prince Inc'),
('550e8400-e29b-41d4-a716-446655440004', 'client@example.com', 'John Smith', 'client', '(555) 987-6543', 'Smith Construction'),
('550e8400-e29b-41d4-a716-446655440005', 'client2@example.com', 'Sarah Johnson', 'client', '(555) 987-6544', 'Johnson Enterprises');

-- Insert sample projects
INSERT INTO projects (id, title, description, service_type, status, priority, client_id, manager_id, budget, start_date, end_date, progress) VALUES
('660e8400-e29b-41d4-a716-446655440001', 'Office Building Electrical Upgrade', 'Complete electrical system upgrade for 5-story office building', 'electrical', 'in_progress', 'high', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', 75000.00, '2024-01-15', '2024-03-15', 65),
('660e8400-e29b-41d4-a716-446655440002', 'Warehouse Construction', 'New 50,000 sq ft warehouse construction', 'construction', 'planning', 'medium', '550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440002', 2500000.00, '2024-02-01', '2024-08-01', 15),
('660e8400-e29b-41d4-a716-446655440003', 'Supply Chain Optimization', 'Logistics and supply chain management system', 'logistics', 'completed', 'low', '550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', 125000.00, '2023-10-01', '2023-12-31', 100);

-- Insert sample tasks
INSERT INTO tasks (id, title, description, project_id, assigned_to, status, priority, due_date) VALUES
('770e8400-e29b-41d4-a716-446655440001', 'Install main electrical panel', 'Install and configure main electrical distribution panel', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440003', 'completed', 'high', '2024-01-25'),
('770e8400-e29b-41d4-a716-446655440002', 'Run electrical conduits', 'Install electrical conduits throughout building floors 1-3', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440003', 'in_progress', 'high', '2024-02-10'),
('770e8400-e29b-41d4-a716-446655440003', 'Site preparation', 'Clear and prepare construction site for warehouse', '660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', 'todo', 'medium', '2024-02-15'),
('770e8400-e29b-41d4-a716-446655440004', 'Foundation planning', 'Design and plan warehouse foundation', '660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440003', 'todo', 'medium', '2024-02-20');

-- Insert sample quotes
INSERT INTO quotes (id, service_type, client_name, client_email, client_phone, project_details, estimated_cost, valid_until) VALUES
('880e8400-e29b-41d4-a716-446655440001', 'electrical', 'Mike Davis', 'mike@example.com', '(555) 111-2222', '{"service": "electrical", "property_type": "residential", "work_type": "panel_upgrade", "square_footage": 2500, "additional_details": "Need 200 amp panel upgrade"}', 3500.00, '2024-03-01'),
('880e8400-e29b-41d4-a716-446655440002', 'construction', 'Lisa Wilson', 'lisa@example.com', '(555) 333-4444', '{"service": "construction", "property_type": "commercial", "work_type": "renovation", "square_footage": 5000, "additional_details": "Office space renovation"}', 125000.00, '2024-02-28'),
('880e8400-e29b-41d4-a716-446655440003', 'logistics', 'Tech Solutions Inc', 'contact@techsolutions.com', '(555) 555-6666', '{"service": "logistics", "business_type": "technology", "service_needed": "warehousing", "monthly_volume": "high", "additional_details": "Need full logistics management"}', 8500.00, '2024-03-15');

-- Insert sample project milestones
INSERT INTO project_milestones (id, project_id, title, description, due_date) VALUES
('990e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'Electrical Design Approval', 'Complete electrical design and get client approval', '2024-01-20'),
('990e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', 'Phase 1 Installation', 'Complete electrical installation for floors 1-2', '2024-02-15'),
('990e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440002', 'Foundation Complete', 'Complete warehouse foundation work', '2024-03-01'),
('990e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440002', 'Structural Framework', 'Complete structural steel framework', '2024-05-01');

-- Insert sample project updates
INSERT INTO project_updates (id, project_id, user_id, update_type, content) VALUES
('aa0e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440002', 'progress', 'Electrical panel installation completed successfully. Moving to conduit installation phase.'),
('aa0e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440003', 'status', 'Project progressing well. Floors 1-2 electrical work 80% complete.'),
('aa0e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 'milestone', 'Site survey completed. Ready to begin site preparation phase.'),
('aa0e8400-e29b-41d4-a716-446655440004', '660e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440002', 'note', 'Supply chain optimization project completed successfully. Client very satisfied with results.');
