-- Insert sample users
INSERT INTO users (id, email, first_name, last_name, role, permissions, phone, company) VALUES
('admin-1', 'admin@crownprince.com', 'John', 'Administrator', 'admin', 
 ARRAY['admin.full_access', 'users.manage', 'projects.manage', 'finances.manage'], 
 '(555) 123-4567', 'Crown Prince Inc'),
('manager-1', 'manager@crownprince.com', 'Sarah', 'Manager', 'manager', 
 ARRAY['projects.manage', 'staff.view', 'clients.manage', 'reports.view'], 
 '(555) 234-5678', 'Crown Prince Inc'),
('staff-1', 'staff@crownprince.com', 'Mike', 'Worker', 'staff', 
 ARRAY['projects.view', 'tasks.manage', 'clients.view', 'reports.view'], 
 '(555) 345-6789', 'Crown Prince Inc'),
('client-1', 'client@example.com', 'Jane', 'Client', 'client', 
 ARRAY['portal.access', 'projects.view_own', 'invoices.view_own'], 
 '(555) 456-7890', 'Example Corp');

-- Insert sample projects
INSERT INTO projects (id, title, description, type, status, progress, start_date, end_date, budget, spent, location, client_id, manager_id) VALUES
('proj-1', 'Downtown Office Complex', 'Complete electrical system upgrade including new panels, LED lighting, and smart controls', 'electrical', 'in-progress', 65, '2024-01-15', '2024-03-15', 45000, 29250, '123 Business Ave, Los Angeles, CA', 'client-1', 'manager-1'),
('proj-2', 'Warehouse Renovation', 'Complete warehouse renovation including structural improvements and modern facilities', 'construction', 'planning', 15, '2024-03-01', '2024-08-15', 180000, 27000, '456 Industrial Blvd, Long Beach, CA', 'client-1', 'manager-1'),
('proj-3', 'Supply Chain Setup', 'Comprehensive logistics setup for new distribution center', 'logistics', 'in-progress', 40, '2024-02-01', '2024-05-01', 75000, 30000, '789 Logistics Way, Carson, CA', 'client-1', 'manager-1');

-- Insert sample tasks
INSERT INTO tasks (id, title, description, project_id, assigned_to, status, priority, due_date, progress, estimated_hours) VALUES
('task-1', 'Complete electrical wiring inspection', 'Inspect all electrical wiring in main office areas', 'proj-1', 'staff-1', 'in-progress', 'high', '2024-02-15 17:00:00', 75, 8),
('task-2', 'Install LED lighting fixtures', 'Install new LED lighting throughout the facility', 'proj-1', 'staff-1', 'pending', 'medium', '2024-02-18 17:00:00', 0, 12),
('task-3', 'Safety equipment check', 'Complete safety equipment inspection and maintenance', 'proj-3', 'staff-1', 'completed', 'high', '2024-02-12 17:00:00', 100, 4);

-- Insert sample project milestones
INSERT INTO project_milestones (project_id, title, description, due_date, completed) VALUES
('proj-1', 'Electrical Assessment', 'Complete electrical system assessment and planning', '2024-01-20', true),
('proj-1', 'Panel Installation', 'Install new electrical panels and distribution', '2024-02-05', true),
('proj-1', 'LED Lighting Installation', 'Install LED lighting throughout the facility', '2024-02-25', false),
('proj-1', 'Smart Controls Setup', 'Configure smart lighting and HVAC controls', '2024-03-10', false);

-- Insert sample project updates
INSERT INTO project_updates (project_id, author_id, title, description, type) VALUES
('proj-1', 'manager-1', 'LED Installation Progress', 'Completed LED installation in main office areas. Moving to conference rooms next week.', 'update'),
('proj-1', 'manager-1', 'Panel Installation Complete', 'All electrical panels have been successfully installed and tested.', 'milestone'),
('proj-2', 'manager-1', 'Project Kickoff', 'Project officially started. Permits have been submitted and initial planning is underway.', 'update');

-- Insert sample quotes
INSERT INTO quotes (reference_number, service_type, project_title, project_description, project_location, timeline, budget_range, project_type, urgency, client_name, client_email, client_phone, status) VALUES
('CPI-001234', 'electrical', 'Home Electrical Upgrade', 'Complete electrical panel upgrade and rewiring for 3-bedroom home', '123 Main St, Los Angeles, CA', '1-month', '$5,000 - $15,000', 'Panel Upgrade', 'medium', 'John Smith', 'john.smith@email.com', '(555) 123-4567', 'pending'),
('CPI-001235', 'construction', 'Kitchen Remodel', 'Full kitchen renovation including cabinets, countertops, and appliances', '456 Oak Ave, Beverly Hills, CA', '3-months', '$25,000 - $50,000', 'Kitchen Remodel', 'low', 'Mary Johnson', 'mary.johnson@email.com', '(555) 234-5678', 'reviewed'),
('CPI-001236', 'logistics', 'Warehouse Storage Solution', 'Monthly warehouse storage for inventory management', '789 Commerce St, Carson, CA', 'flexible', '$1,000 - $5,000/month', 'Warehouse Storage', 'medium', 'Tech Solutions Inc', 'contact@techsolutions.com', '(555) 345-6789', 'quoted');
